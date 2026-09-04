'use strict';

const Homey = require('homey');
const { Cluster } = require('zigbee-clusters');
const AqaraLumiCluster = require('./lib/AqaraLumiCluster');

module.exports = class AqaraFP1App extends Homey.App {

  async onInit() {
    Cluster.addCluster(AqaraLumiCluster);
    this.log('Aqara FP1 app initialized');
  }

};
