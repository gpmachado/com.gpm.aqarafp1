'use strict';

/**
 * connectedDevices.js
 *
 * Trimmed for this app: aqara_fp1 is single-endpoint and never has sibling
 * sub-devices, but AvailabilityManager.js calls getNodeDevices() as part of
 * its shared lifecycle regardless. Only that function is kept here.
 */

/**
 * Returns all Homey device instances that share the same physical Zigbee node
 * as `device`, matched by ieeeAddress.
 *
 * @param {ZigBeeDevice} device - the calling device instance
 * @returns {Array} sibling device instances (includes `device` itself)
 */
function getNodeDevices(device) {
  const myZclNode = device.zclNode;
  const myIeee    = device.getData()?.ieeeAddress;
  return device.driver.getDevices().filter(d => {
    try {
      if (myZclNode) return d.zclNode === myZclNode;
      if (myIeee)    return d.getData().ieeeAddress === myIeee;
      return false;
    } catch { return false; }
  });
}

module.exports = { getNodeDevices };
