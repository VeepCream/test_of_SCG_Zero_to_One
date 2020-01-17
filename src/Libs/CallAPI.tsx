import { Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const ENDPOINTS: any = {
    getMap: { url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.8234866,100.5081204&radius=1500&type=restaurant&key=AIzaSyDKdwlRhGO2rpeQM9EHHGAqzIgbJxh-zuA", method: 'GET' },
}

export const callAPI = (url: string, body?: any) => {

    return new Promise(async (resolve, reject) => {
        const data = ENDPOINTS[url];
        API(data, body).then((value) => {
            resolve(value)
        }).catch((error) => {
            //console.log("error",error)
            reject()
        })
    })

}

const API = (url: any, body?: any) => {
    const data = url;
    let obj: any = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-mobile': Platform.OS,
        }
    }

    if (data.method === 'GET') {
        obj["method"] = data.method
    }
    else {
        obj["method"] = data.method
        obj["body"] = JSON.stringify(body)
    }
    // console.log("data.url",data.url)
    // console.log("data.url",obj)
    return new Promise((resolve: any, reject: any) => {
        fetch(data.url, obj).then(
            (response) => {
                // console.log("response",response)
                if (response.status === 200) {
                    return response.json()
                } else {
                    reject('error code: ' + response.status)
                }
            }
        )
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                // console.log("error",error)
                reject(error);
            })
    })
};