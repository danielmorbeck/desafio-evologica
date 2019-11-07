import Stream from "../models/Stream";

class StreamController {
  async store(req, res) {
    const stream = await Stream.create(req.body);

    return res.json(stream);
  }
}

export default new StreamController();
