# Atlona Omega Series Companion Module

This module lets Bitfocus Companion control supported Atlona Omega devices over Telnet. Use it to remotely manage power, signal routing, output contols, and USB host settings.

# Configuration and Login

Enter the Atlona device IP address and Telnet port. The default Telnet port is `23`. The login credentials are the same as those used to connect to the Atlona Web UI.

The device must have Telnet Login Mode enabled from the Web UI, and must be reachable from the Companion host. If "Telnet Timeout" is enabled, the connection to the Companion Host will expire and must be manually reconnected.

# Actions

The module provides actions for the following commands from the Atlona API:

- Power: Power On, Power Off, and Reboot
- Front panel: Blink LED, DISPLAY button control, Lock and Unlock
- Routing: Select an input for HDMI and HDBaseT outputs
- Output control: Enable or disable HDMI and HDBaseT outputs
- Audio: Mute or unmute HDMI and HDBaseT audio outputs
- USB: Configure USB Host Logic, USB Host Route, and USB VBus power

Actions named `Get ... Status` are intended for manually refreshing variables or troubleshooting. Status variables are also populated automatically when the connection is established.

# Variables

The module exposes variables for:

- Device model and firmware version
- Power and blink status
- Input 1-4 connection status
- Output 1-2 enable status
- XY Status: Displays which input is routed to which output
- Analog audio output status
- HDMI and HDBaseT audio mute status
- USB Host Logic and USB Host Route
- USB VBus power status

Variables are updated during initial connection and when the corresponding action (or `Get ... Status` action) is run.

# Supported Devices

Commands have been tested with the Atlona AT-OME-MS42. Other Atlona Omega series devices may work but have not been verified.

RS-232 control is not currently supported.

# Troubleshooting

- Confirm the IP address and Telnet port.
- Confirm that Telnet Login Mode is enabled on the device.
- Confirm that the Companion host can reach the device on the configured port.
- Verify the username and password against the Atlona Web UI.
- Check the Companion log for authentication or connection errors.
- Run the relevant `Get ... Status` action to refresh a variable manually.

# Feedbacks and Presets

Feedbacks and presets are not currently implemented.
