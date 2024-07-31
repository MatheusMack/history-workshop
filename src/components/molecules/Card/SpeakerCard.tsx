import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface SpeakerCardProps {
  name: string;
  bio: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, bio }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SpeakerCard;
