import Sensor from "../models/Sensor";

class SensorController {
  async store(req, res) {
    const sensor = await Sensor.create(req.body);

    return res.json(sensor);
  }
}

export default new SensorController();
