import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xBc38C665855254e737BF48318A6Ca6b0AFC131BA");

(async () => {
    try {
      await editionDrop.createBatch([
        {
          name: "Anzio niche Bronze alloy",
          description: "Bronze alloy for Black Matte BMW's",
          image: readFileSync("scripts/assets/Anzio_niche.png"),
        },
      ]);
      console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
      console.error("failed to create the new NFT", error);
    }
  })();