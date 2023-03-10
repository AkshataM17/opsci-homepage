import React from "react";
import TestmonialStyled from "./overrides/testmonialStyle";
import { Typography, CardContent, Box } from "@mui/material";
import Icon from "@utils/Icon";
function DonateCard() {
  return (
    <TestmonialStyled>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Icon path="comas" />
        </Box>
        <Typography variant="h5" fontWeight={400} mt={4} gutterBottom>
          “It is exactly what science needs. Fair opportunities and rightful ownership of research. Allows us to truly own our identities on the internet. Researchers receive their fair share and move away from the pay-to-publish business model.”
        </Typography>
        {/* <Typography
          align="center"
          color="primary"
          variant="h4"
          fontWeight={500}>
          John Doe
        </Typography> */}
        
      </CardContent>
    </TestmonialStyled>
  );
}

export default DonateCard;
