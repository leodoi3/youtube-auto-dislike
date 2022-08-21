/*
 * Script running in background for the plugin
 * Currently detect update, and smooth transition between versions
 */
function isNewVersion(stored_version, manifest_version) {
	for (var i = 0; i <= stored_version.split(".").length - 1; i++) {
		if (stored_version.split(".")[i] < manifest_version.split(".")[i]) {
			return true;
		}
	}
	return false;
}

function handleInstalled(details) {
	let optionManager = new OptionManager(OPTIONS);
	optionManager.get().then((options) => {
		// if this is a new version display patch note
		if ( isNewVersion(options.plugin_version, chrome.runtime.getManifest().version) ) {
			chrome.tabs.create({
				url: "update_info.html"
			});
			// save the new version number
			options.plugin_version = chrome.runtime.getManifest().version;
			optionManager.set(options);
		}
		//browser.storage.local.clear();
	});	
}
// triggered when new  version installed
chrome.runtime.onInstalled.addListener(handleInstalled);
