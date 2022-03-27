const publicVapidKey = 'BKw8Ua9N_rFGkf_fVw_vZ_6jnyBbjr87wxKbIsVrAVRDhTifuqXPi4TnzqFPs9QyNnyoqbZ1sIWAmNOC5eN-R28';

if('serviceWorker' in navigator){
    send().catch(err => console.error(err));
}

async function send(){
    console.log('Registering Service Worker');
    const regiser = await navigator.serviceWorker.register('worker.js',{
        scope: '/'
    });

    console.log('Registering Push');

    const subscription = await regiser.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    }); 

    console.log("push Registered");

    await fetch('/subscribe',{
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    });

    console.log('push sent');

}

function urlBase64ToUint8Array(base64String){
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outPutArray = new Uint8Array(rawData.length);

    for(let i = 0; i < rawData.length; ++i){
        outPutArray[i] = rawData.charCodeAt(i);
    }

    return outPutArray;
}
