# React Native Migration Proof of Concept

This document outlines the Proof of Concept for migrating a piece of the `:core` module (`CoreAnalytics`) to React Native.

## The Strategy Used
Because the Open edX Android application relies on `:core` natively, we cannot simply delete the Kotlin `:core` code. If we do, the rest of the application will fail to compile.

Instead, we use a **Native-to-JS Bridge Adapter** pattern:
1. We keep the Kotlin `CoreAnalytics` interface.
2. We implement this interface in JS (`react-native/src/CoreAnalytics.ts`) and register it as a Callable Module in React Native.
3. We create a new Kotlin class, `ReactCoreAnalyticsAdapter`, which implements the Kotlin `CoreAnalytics` interface.
4. Under the hood, `ReactCoreAnalyticsAdapter` uses React Native's `CatalystInstance.callFunction` to pass the data over the bridge to the JS implementation.

## Files Created
1. `react-native/src/CoreAnalytics.ts`: The JS implementation of the analytics.
2. `react-native/package.json` & `index.js`: The React Native project setup.
3. `core/src/main/java/org/openedx/core/presentation/ReactCoreAnalyticsBridge.kt`: The Kotlin adapter that allows native Android code to route analytics calls to the JS implementation.

## How to proceed with Koin (Dependency Injection)
In the app's Koin module setup (likely in `app/src/main/java/org/openedx/app/di/AppModule.kt`), you would replace the native analytics implementation with the React Native bridge:

```kotlin
// Old implementation
// single<CoreAnalytics> { CoreAnalyticsImpl() }

// New implementation
single<CoreAnalytics> { ReactCoreAnalyticsAdapter(get()) }
```
*(Note: `get()` must resolve to a valid `ReactApplicationContext` initialized by your React Native host)*
