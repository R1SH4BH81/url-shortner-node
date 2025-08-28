const URL = require("../model/url.models");
const { nanoid } = require("nanoid");

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ message: "url is required" });
    }

    const shortId = nanoid(8);

    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.status(201).json({ id: shortId });
}

module.exports = { handleGenerateNewShortUrl };
