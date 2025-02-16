import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Tooltip from '@mui/joy/Tooltip';
import placeholderImage from '../assets/Placeholder.png';

export default function OverflowCard({
    mainImage,
    mainImageSrcSet,
    mainImageAlt = '',
    title,
    description,
    icons = [],
    link = '#'  // Default link to the same page
}) {
    const nameOverrides = {
        GrMysql: 'MySQL',
    };

    return (
        <Box
            component="a"
            href={link}
            sx={{ width: { xs: 300, sm: 400 } }}
        >
            <Card variant="outlined" sx={{ width: { xs: 300, sm: 400 } }}>
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <img
                            src={mainImage || placeholderImage}
                            srcSet={mainImageSrcSet || placeholderImage}
                            loading="lazy"
                            alt={mainImageAlt || "Placeholder Image"}
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography level="title-md">{title}</Typography>
                    <Typography level="body-sm">{description}</Typography>
                </CardContent>
                <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                    <Divider inset="context" />
                    <CardContent orientation="horizontal">
                        {icons.map((IconComponent, index) => {
                            const defaultName =
                                IconComponent.displayName || IconComponent.name || 'icon';
                            const tooltipText = nameOverrides[defaultName] || defaultName;
                            return (
                                <Tooltip key={index} title={tooltipText} placement="top">
                                    <Box
                                        sx={{
                                            width: 27,
                                            height: 27,
                                            mr: index < icons.length - 1 ? 1 : 0,
                                            backgroundColor: 'white',
                                            borderRadius: '50%',
                                            boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
                                            p: 0.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <IconComponent
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </Box>
                                </Tooltip>
                            );
                        })}
                    </CardContent>
                </CardOverflow>
            </Card>
        </Box>
    );
}
