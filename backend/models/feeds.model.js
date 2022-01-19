import conn from '../databases/db.js'

export async function getFeedsRange(range) {
    try {
        let { start, end } = range;

        let selectFeeds = "SELECT * FROM feeds WHERE idx BETWEEN ? AND ?";
        const data = await new Promise((resolve, reject) => {
            conn.query(selectFeeds, [start, end], function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                resolve(result)
            });
        })

        return data
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export async function getFeedsIdx(idx) {
    try {
        let selectFeed = "SELECT * FROM feeds WHERE idx = ?";
        const data = await new Promise((resolve, reject) => {
            conn.query(selectFeed, [idx], function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                resolve(result)
            });
        })

        return data

    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export async function insertFeed(insertData) {
    try {
        let { content, owner, date, type } = insertData;
        let insertFeeds = "INSERT INTO feeds(feed_content, feed_owner, feed_date, feed_type) VALUES (?,?,?,?)";
        const data = await new Promise((resolve, reject) => {
            conn.query(insertFeeds, [content, owner, date, type], function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                resolve({status:1})
            });
        })

        return data
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}