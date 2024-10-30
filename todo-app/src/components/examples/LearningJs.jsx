
const person = {

    name: 'Srinath',
    address: {
        city: 'Chennai',
        State: 'Tamilnadu',
        Pincode: '600013'
    },
    profiles: ['twitter-X', 'Facebook', 'Telegram', 'Instagram'],
    printProfile: () => {
        person.profiles.map (profile =>console.log(profile))
    }
}


export default function LearningJavaScript() {

    return (

        <>
            <div>{person.name}</div>
            <div>{person.address.city}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}