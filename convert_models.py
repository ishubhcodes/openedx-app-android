import os
import re

KOTLIN_DIR = "core/src/main/java/org/openedx/core/domain/model"
TS_DIR = "react-native/src/domain/model"

TYPE_MAPPING = {
    "String": "string",
    "Int": "number",
    "Long": "number",
    "Float": "number",
    "Double": "number",
    "Boolean": "boolean",
    "Date": "Date",
    "Any": "any"
}

def convert_type(kt_type):
    # Handle optional types
    is_optional = kt_type.endswith("?")
    base_type = kt_type.strip("?")

    # Handle List<T>
    list_match = re.match(r"List<(.*)>", base_type)
    if list_match:
        inner = convert_type(list_match.group(1))
        # simplify for arrays
        ts_type = f"{inner}[]"
    else:
        ts_type = TYPE_MAPPING.get(base_type, base_type) # Default to the same name if unknown (likely another model)

    return ts_type, is_optional

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Find enum classes
    enum_matches = re.finditer(r"enum\s+class\s+(\w+).*?\{([^}]*)\}", content, re.DOTALL)
    for match in enum_matches:
        enum_name = match.group(1)
        enum_body = match.group(2)
        # Extract enum values
        values = re.findall(r"([A-Z_0-9]+)", enum_body)

        ts_content = f"export enum {enum_name} {{\n"
        for val in values:
            if val not in ["val", "String", "Int"]: # simplistic filter for constructor params
                ts_content += f"  {val} = '{val}',\n"
        ts_content += "}\n"

        with open(os.path.join(TS_DIR, f"{enum_name}.ts"), 'w') as out:
            out.write(ts_content)

    # Find data classes
    data_class_matches = re.finditer(r"data\s+class\s+(\w+)\s*\((.*?)\)", content, re.DOTALL)
    for match in data_class_matches:
        class_name = match.group(1)
        params = match.group(2)

        ts_content = f"export interface {class_name} {{\n"

        # Parse params
        param_matches = re.finditer(r"(?:val|var)\s+(\w+)\s*:\s*([^,=)\n]+)", params)
        for p_match in param_matches:
            name = p_match.group(1)
            kt_type = p_match.group(2).strip()

            ts_type, is_optional = convert_type(kt_type)
            opt_marker = "?" if is_optional else ""

            ts_content += f"  {name}{opt_marker}: {ts_type};\n"

        ts_content += "}\n"

        with open(os.path.join(TS_DIR, f"{class_name}.ts"), 'w') as out:
            out.write(ts_content)

for filename in os.listdir(KOTLIN_DIR):
    if filename.endswith(".kt"):
        process_file(os.path.join(KOTLIN_DIR, filename))

print("Conversion complete.")
