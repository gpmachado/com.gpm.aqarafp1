Adds support for the Aqara FP1 mmWave presence sensor (lumi.motion.ac01) to Homey, with directional presence detection and reliable state reporting.

The FP1 reports occupancy as a true/false alarm plus detailed presence events — enter, leave, approach, away, and left/right side crossings — exposed as a flow trigger with the event type as a token. Motion sensitivity, monitoring mode (undirected or left/right), and approach distance can all be configured from the device settings and are written directly to the sensor. A "Reset presence" flow action is also available for a manual re-arm.

Custom zone mapping (drawing detection regions, like the official Aqara app's zone editor) is deliberately not implemented. The Zigbee protocol for it is write-only — the sensor never reports back what's configured, and gives no live preview of where it's currently detecting something while you draw a zone. The official app's real-time overlay comes from data outside this documented protocol (likely the hub's local/BLE channel). Without that feedback loop, a Homey version of this would have you drawing zones blind with no way to verify they actually work, which isn't worth shipping.

Device temperature is read from the sensor's internal reporting and shown on the device tile, matching what's sent to Homey flows. An optional power outage counter (off by default, toggle in settings) tracks how many times the sensor has lost power, useful for diagnosing flaky wiring or extension leads.

The FP1 only reports its full state via spontaneous packets rather than on-demand reads — this app listens passively for those reports instead of polling, so values may take a few minutes to first populate after pairing or a Homey restart.

Supported devices:
- Aqara FP1 presence sensor (lumi.motion.ac01)
