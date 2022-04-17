import { app } from './app';
import { AddDataSource } from './bd';


async function main() {
    try {
        await AddDataSource.initialize()
        console.log("Data base conected")
        app.listen(3000)
        console.log("server on lisener on port 3000")
    } catch (error) {
        console.log(error)
    }

}
main()