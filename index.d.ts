declare module 'react-native-flurry-analytics' {
	interface FlurryAnalyticsStatic {

		/**
		 * FlurryAnalytics.startSession('YOUR_API_KEY');
		 */
		startSession(apiKey: string): any;

		/**
		 * !!! method must be called prior to invoking startSession, e.g. FlurryAnalytics.setAppVersion('1.0.0');
		 */
		setAppVersion(version: string): any;

		/**
		 * !!! method must be called prior to invoking startSession, e.g. FlurryAnalytics.setDebugLogEnabled(false)
		 */
		setDebugLogEnabled(enabled: boolean): any;

		/**
		 * !!! method must be called prior to invoking startSession, e.g. FlurryAnalytics.setSessionContinueSeconds(10);
		 */
		setSessionContinueSeconds(seconds: number): any;

		/**
		 * !!! method must be called prior to invoking startSession, e.g. FlurryAnalytics.setCrashReportingEnabled(true);
		 */
		setCrashReportingEnabled(enabled: boolean): any;

		/**
		 * e.g. FlurryAnalytics.logEvent('eventName'); FlurryAnalytics.logEvent('eventName', {param: 'true'}, true);
		 */
		logEvent(eventName: string, params?: any, timed?: boolean): any;

		/**
		 * e.g. FlurryAnalytics.endTimedEvent('eventName'); FlurryAnalytics.endTimedEvent('eventName', {param: 'true'});
		 */
		endTimedEvent(eventName: string, params?: any): any;

		/**
		 * e.g. FlurryAnalytics.logPageView();
		 */
		logPageView(): any;

		/**
		 * e.g. FlurryAnalytics.setUserId('userId');
		 */
		setUserId(userId: string): any;

		/**
		 * e.g. FlurryAnalytics.setUserAge(28);
		 */
		setUserAge(age: number): any;

		/**
		 * e.g. FlurryAnalytics.setUserGender('m');
		 */
		setUserGender(gender: 'm' | 'f'): any;
	}
	const FlurryAnalytics: FlurryAnalyticsStatic;
	export default FlurryAnalytics;
}
