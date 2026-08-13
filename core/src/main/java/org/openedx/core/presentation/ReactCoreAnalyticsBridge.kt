package org.openedx.core.presentation

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableMap

/**
 * In a normal RN app, Native Modules allow JS to call Native.
 * Because we are moving Core to JS, we need Native to call JS.
 *
 * We use `CatalystInstance.callFunction` to execute the JS function
 * registered in AppRegistry.registerCallableModule.
 */
class ReactCoreAnalyticsAdapter(
    private val reactContext: ReactApplicationContext
) : CoreAnalytics {

    override fun logEvent(event: String, params: Map<String, Any?>) {
        if (!reactContext.hasActiveReactInstance()) {
            // Cannot log event to JS if React is not running
            return
        }

        val writableMap = Arguments.createMap()
        params.forEach { (key, value) ->
            when (value) {
                is String -> writableMap.putString(key, value)
                is Int -> writableMap.putInt(key, value)
                is Double -> writableMap.putDouble(key, value)
                is Boolean -> writableMap.putBoolean(key, value)
                null -> writableMap.putNull(key)
                // handle other types appropriately
            }
        }

        // Native calling JS:
        // We invoke the 'logEvent' function on the 'CoreAnalyticsBridge' JS module
        reactContext.catalystInstance.callFunction(
            "CoreAnalyticsBridge",
            "logEvent",
            com.facebook.react.bridge.Arguments.fromList(listOf(event, writableMap))
        )
    }
}
