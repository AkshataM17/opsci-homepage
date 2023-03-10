import { Box, CardContent, Typography, Stack, Button } from "@mui/material";
import React from "react";
import IconUrl from "@utils/Icon";
import SigninOrcidCardStyled from "./overrides/signinOrcidCardStyle";
import ErrorIcon from "@mui/icons-material/Error";
import Link from "next/link";

function SigninOrcidCard() {
  return (
    <SigninOrcidCardStyled>
      <CardContent>
        <Box textAlign="center" mb={2}>
          <Typography fontFamily="'Exo 2'" variant="h4" mt={1.4}>
            Sign In
          </Typography>
        </Box>

        <Stack spacing={3}>
          <Link href="/api/orcid">
            <Button
              variant="contained"
              color="success"
              startIcon={<IconUrl path="id" />}
            >
              Continue with ORCID
            </Button>
          </Link>
          <Box sx={{ display: "flex" }}>
            <ErrorIcon className="errorIcon" />
            <Typography variant="body2" sx={{ mx: 1 }}>
              ORCID provides a persistent digital identifier an (ORCID iD) that
              you own and control, and that distinguishes you from every other
              researcher.you can connect your ID with your professional
              information - affilations,grants, publications, peer review, and
              more.
            </Typography>
          </Box>
        </Stack>

        <Stack className="register" spacing={0.7} mt={4}>
          <Link href="/">Don’t have an account?</Link>
          <Link href="/auth/signup">Sign up</Link>
        </Stack>
      </CardContent>
    </SigninOrcidCardStyled>
  );
}

export default SigninOrcidCard;
