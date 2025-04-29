function parseUplink(device, payload)
{
    var parsed = payload.asParsedObject();
    env.log(parsed);    

    // Store Battery Voltage
    var e = device.endpoints.byIndex(0);
    if (e != null)
        e.updateGenericSensorStatus(parsed.batteryVoltage);

    // Store Cumulative Flow
    e = device.endpoints.byIndex(1);
    if (e != null)
        e.updateGenericSensorStatus(parsed.cumulativeFlow);

    // Store Meter Number
    e = device.endpoints.byIndex(2);
    if (e != null)
        e.updateGenericSensorStatus(parsed.meterNumber);

    // Store Packet Number
    e = device.endpoints.byIndex(3);
    if (e != null)
        e.updateGenericSensorStatus(parsed.packetNumber);
        
    // Store Pulse Constant
    e = device.endpoints.byIndex(4);
    if (e != null)
        e.updateGenericSensorStatus(parsed.pulseConstant);

    // Store Status
    e = device.endpoints.byIndex(5);
    if (e != null)
        e.updateGenericSensorStatus(parsed.status);
}

//function buildDownlink(device, endpoint, command, payload)
//{
//	payload.buildResult = downlinkBuildResult.ok;
//
//	switch (command.type) {
//		case commandType.onOff:
//			switch (command.onOff.type) {
//				case onOffCommandType.turnOn:
//					payload.setAsBytes([261F0045]);		// Command ID 26 1F 00 45 is "open"
//					break;
//				case onOffCommandType.turnOff:
//					payload.setAsBytes([261F0146]);		// Command ID 26 1F 01 46 is "closed"
//					break;
//				default:
//					payload.buildResult = downlinkBuildResult.unsupported;
//					break;
//			}
//			break;
//		default:
//			payload.buildResult = downlinkBuildResult.unsupported;
//			break;
//	}
//	
//}