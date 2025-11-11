import { ScrollView, StyleSheet, Platform, Text } from 'react-native';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Avatar, AvatarFallbackText, AvatarImage, AvatarBadge } from '@/components/ui/avatar';
import { Badge, BadgeIcon, BadgeText } from '@/components/ui/badge';
import { GlobeIcon, EditIcon } from '@/components/ui/icon';
import { Grid, GridItem } from '@/components/ui/grid';
import { Image } from '@/components/ui/image';
import { Pressable } from '@/components/ui/pressable';
import { ImageSourcePropType } from 'react-native';

{/*Componente propio: GalleryCard*/}
function GalleryCard({ source }: { source: ImageSourcePropType }) {
  return (
    <Box
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        width: 160,
        height: 120,
        borderWidth: 2,
        borderColor: '#76afdeff',
        display: 'flex',        
        alignItems: 'center',   
        justifyContent: 'center',
      }}
    >
      <Image
        source={source}
        style={{
          width: 140,          
          height: 100,          
          resizeMode: 'cover',
        }}
        alt="gallery-card"
      />
    </Box>
  );
}

export default function ProfileScreen() {
  const topSafeArea = Platform.OS === 'android' ? 24 : 44;

  const galleryImages: ImageSourcePropType[] = [
    require('../assets/images/1.jpg'),
    require('../assets/images/2.jpg'),
    require('../assets/images/3.jpg'),
    require('../assets/images/4.jpg'),
  ];

  return (
    <Box style={{ flex: 1, backgroundColor: '#FFF', paddingTop: topSafeArea }}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 120 }}>

        {/* Avatar + Nombre + Badge */}
        <VStack space="sm" style={{ alignItems: 'center', marginBottom: 16 }}>
          <Avatar size="xl">
            <AvatarFallbackText>Jane Doe</AvatarFallbackText>
            <AvatarImage source={require('../assets/images/5.jpg')} />
            <AvatarBadge size="sm" />
          </Avatar>
          <Text style={styles.nameText}>David Alejandro Gutiérrez Sánchez</Text>
          <Badge size="lg" variant="outline" action="success">
            <BadgeText>Verified</BadgeText>
            <BadgeIcon as={GlobeIcon} className="ml-2" />
          </Badge>
          <Pressable style={styles.editButton}>
            <HStack style={{ justifyContent: 'center', alignItems: 'center' }}>
              <EditIcon style={{ width: 16, height: 16 }} />
              <Text style={styles.editButtonText}>Editar perfil</Text>
            </HStack>
          </Pressable>
        </VStack>

        {/* Grid principal con Grid nested */}
        <Grid
          className="gap-2"
          _extra={{ className: 'grid-cols-2' }}
          style={{ width: '100%', maxWidth: 360, alignSelf: 'center' }}
        >
          {galleryImages.map((img, index) => (
            <GridItem
              key={index}
              _extra={{ className: 'col-span-1' }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {/* Nested Grid */}
              <Grid
                className="gap-1"
                _extra={{ className: 'grid-cols-1' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <GridItem
                  _extra={{ className: 'col-span-1' }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <GalleryCard source={img} />
                </GridItem>
              </Grid>
            </GridItem>
          ))}
        </Grid>

        {/* Botón Guardar Cambios */}
        <Pressable style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Guardar Cambios</Text>
        </Pressable>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
    color: '#000',
  },
  editButton: {
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    minWidth: 160,
  },
  editButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 6,
    textAlign: 'center',
  },
  saveButton: {
    marginTop: 24,
    paddingVertical: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
