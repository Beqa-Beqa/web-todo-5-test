import "./AlsoLikeContainer.css";
import AlsoLikeSingle from "../Components/AlsoLikeSingle";
import headphoneData from "../Data/HeadphoneData";
import speakerData from "../Data/SpeakerData";
import earphoneData from "../Data/EarphoneData";
import { specificDataObject } from "../Data/Interface";

let AlsoLikeContainer = () => {
    // Imported all the data to create array of all the data which is used to randomly pick an item for You may also like section
    const dataArr = [headphoneData, speakerData, earphoneData];
    // Generates random index from range in given numbers
    const randomIndexFromData = (minNum: number, maxNum: number) => {
        return Math.floor((Math.random() * (maxNum - minNum) + minNum));
    }
    // Declaring variables and giving initial values so we don't get error from TS about types.
    let randomSection1: specificDataObject[] = [], randomSection2: specificDataObject[] = [], randomSection3: specificDataObject[] = [];
    let itemData1: specificDataObject = {features: [], h2: "", image: "", images: [], index: 0, inTheBox: [], newProduct: false, p: "", price: 0}
    let itemData2: specificDataObject = itemData1;
    let itemData3: specificDataObject = itemData1;
    // This recursive function ensures all the items are differend and none repeats.
    const differentData = () => {
        randomSection1 = dataArr[randomIndexFromData(0, dataArr.length)];
        randomSection2 = dataArr[randomIndexFromData(0, dataArr.length)];
        randomSection3 = dataArr[randomIndexFromData(0, dataArr.length)];
        itemData1 = randomSection1[randomIndexFromData(0, randomSection1.length)];
        itemData2 = randomSection2[randomIndexFromData(0, randomSection2.length)];
        itemData3 = randomSection3[randomIndexFromData(0, randomSection3.length)];
        if(itemData1 === itemData2 || itemData1 === itemData3 || itemData2 === itemData3) {
           differentData();
        }
    }
    // This function corrects the path based on where the item is chosen from
    const setProperFromPath = (section: specificDataObject[]) => {
        if(section === headphoneData) {
            return "/headphones/";
        } else if (section === speakerData) {
            return "/speakers/";
        } else if (section === earphoneData) {
            return "/earphones/";
        }
    }
    // Calling function declared earlier for different items
    differentData();
    return (
        <div className="also-like-parent">
            <h2>You may also like</h2>
            <div className="also-like-container">
                {/* Containing components and passing needed data */}
                <AlsoLikeSingle from={setProperFromPath(randomSection1)} itemData={itemData1} />
                <AlsoLikeSingle from={setProperFromPath(randomSection2)} itemData={itemData2} />
                <AlsoLikeSingle from={setProperFromPath(randomSection3)} itemData={itemData3} />
            </div>
        </div>
    );
}

export default AlsoLikeContainer;