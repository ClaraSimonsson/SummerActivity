import { Grid } from "@mui/material";


function KmCard(index) {
    return (<Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} minHeight={160}/>);
}

export default KmCard;