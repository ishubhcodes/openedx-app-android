/**
 * React Native implementation of CoreAnalytics.
 * This represents the JS-side logic that was previously in the Kotlin :core module.
 */

export interface CoreAnalytics {
    logEvent(event: string, params: Record<string, any>): void;
}

class CoreAnalyticsImpl implements CoreAnalytics {
    logEvent(event: string, params: Record<string, any>): void {
        console.log(`[JS Analytics] Event: ${event}`, params);
        // Here you would integrate with your JS analytics provider (e.g. Segment, Firebase JS SDK)
    }
}

export const coreAnalytics = new CoreAnalyticsImpl();

// If we are using the standard RN bridge (Native -> JS), we would register a callable module
import { AppRegistry } from 'react-native';

AppRegistry.registerCallableModule('CoreAnalyticsBridge', {
    logEvent: (event: string, params: Record<string, any>) => {
        coreAnalytics.logEvent(event, params);
    }
});
