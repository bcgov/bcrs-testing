export class Common {

    getRandomString() {
        let anySize = 8;
        let charset = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < anySize; i++)
            result += charset[Math.floor(Math.random() * charset.length)];
        return result;
    }

    getDataOutOfJson(json) {
        let list = []

        function test(runObj) {
            for (let i in runObj) {
                typeof runObj[i] == "object" ? test(runObj[i]) : list.push(runObj[i]);
            }
            return list;
        }

        return test(JSON.parse(JSON.stringify(json)));
    }

}

export const common = new Common();
