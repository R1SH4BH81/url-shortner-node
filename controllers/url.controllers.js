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


async function handleGetAnalytics(req, res) {


    const shortId = req.params.shortId;
    const result = await  URL.findOne({shortId});
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics : result.visitHistory
    })
}

async function handleRedirect(req, res) {
    try {
        const { shortId } = req.params;

        const urlDoc = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true } 
        );

        if (!urlDoc) {
            return res.status(404).json({ message: "Short URL not found" });
        }

        // Redirect the user to the original URL
        return res.redirect(urlDoc.redirectUrl);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}


module.exports = { handleGenerateNewShortUrl ,handleRedirect,handleGetAnalytics };
