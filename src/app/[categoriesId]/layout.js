import CategoryList from '@/components/ui/CategoryList/CategoryList';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const CategoriesLayout = ({ children }) => {
    return (
        <Box className="mt-5">
            <Container>
                <Grid className='my-4' container spacing={2}>
                    <Grid item xs={3}>
                        <CategoryList />
                    </Grid>
                    <Grid item xs={9}>

                        {children}
                    </Grid>

                </Grid>
            </Container>

        </Box>
    );
};

export default CategoriesLayout;