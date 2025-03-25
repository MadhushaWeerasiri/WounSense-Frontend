import { Box, Typography } from '@mui/material';
import WoundCard from './WoundCard.js';
import * as React from 'react';

export default function Wounds() {
    const [wounds, setWounds] = React.useState([
        {
            "title": "Abrasions",
            "img": "abrasions",
            "description": "Superficial skin injuries caused by friction or scraping against rough surfaces, affecting the outermost layer of the skin. They are usually minor but require proper cleaning and care to prevent infection and promote healing."
        },
        {
            "title": "Bruises",
            "img": "bruises",
            "description": "Skin injuries caused by blunt force trauma, leading to blood vessels breaking under the skin without an open wound. They appear as discolored patches (blue, purple, or yellow) and usually heal on their own within a few weeks."
        },
        {
            "title": "Burns",
            "img": "burns",
            "description": "Tissue damage caused by heat, chemicals, electricity, or radiation. Burns are classified by depth (first, second, or third-degree) and require different treatment approaches depending on severity, location, and extent."
        },
        {
            "title": "Cuts",
            "img": "cut",
            "description": "Clean breaks in the skin caused by sharp objects. Cuts may be superficial or deep, with the latter potentially affecting underlying tissues. Proper cleaning and closure techniques help minimize scarring and prevent infection."
        },
        {
            "title": "Diabetic Wounds",
            "img": "diabetic",
            "description": "Chronic wounds common in people with diabetes, often occurring on the feet due to nerve damage and poor circulation. These wounds heal slowly, are prone to infection, and require specialized care to prevent complications."
        },
        {
            "title": "Lacerations",
            "img": "laseration",
            "description": "Irregular tears in the skin caused by trauma from blunt objects or forces. Lacerations often have jagged edges and may involve damage to underlying tissues. They typically require thorough cleaning and may need sutures for proper healing."
        },
        {
            "title": "Pressure Wounds",
            "img": "pressure",
            "description": "Also known as bedsores or pressure ulcers, these wounds develop when prolonged pressure damages the skin and underlying tissue. Common in bedridden patients, they often occur at bony prominences and require frequent repositioning to prevent."
        },
        {
            "title": "Surgical Wounds",
            "img": "surgical",
            "description": "Intentional incisions made during surgical procedures. These wounds are typically clean and have straight edges. Proper post-operative care is essential to ensure optimal healing and minimize the risk of infection."
        },
        {
            "title": "Venous Wounds",
            "img": "venous",
            "description": "Chronic wounds resulting from poor venous circulation, typically occurring on the lower legs. These wounds often have irregular borders, can be shallow or deep, and are associated with leg swelling, skin discoloration, and varicose veins."
        },
    ]);

    return (
        <Box
            id= 'Wounds'
            sx={{
                paddingTop: '70px'
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    padding: '30px 0ps 20px 0px'
                }}
            >
                <Typography variant='h5' >Some Insights about the wounds that classifies by the</Typography>
                <Typography variant='h4' color='#feb337'>WoundSense</Typography>
            </Box>
            {wounds.map((wound, index) => (
                <WoundCard
                    key={index}
                    title={wound.title}
                    img={wound.img}
                    description={wound.description}
                />
            ))}
        </Box>
    );
}
