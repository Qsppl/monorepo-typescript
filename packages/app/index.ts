import {someLogic} from './src'

(async () => {
    console.log('app started');
    await someLogic('Eugene', 33, 'gray')
    console.log('app finished');
})()
