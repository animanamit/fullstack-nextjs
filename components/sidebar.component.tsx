import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout'
import { MenuItem } from '@chakra-ui/react'

import Image from 'next/image'
import Link from 'next/link'

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md'

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
]

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Favourite',
    icon: MdFavorite,
    route: '/favourites',
  },
]

const playlists = new Array(30)
  .fill(1)
  .map((_, index) => `Playlist ${index + 1}`)

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <Image src="/logo.svg" height="60" width="120" />
        </Box>

        <Box marginBottom="20px">
          <List spacing="2">
            {navMenu.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <Link href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {item.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box marginTop="20px" marginBottom="20px">
          <List spacing="2">
            {musicMenu.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <Link href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {item.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />

        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing="2">
            {playlists.map((item) => (
              <ListItem paddingX="20px" key={item}>
                <LinkBox>
                  <Link href="/" passHref>
                    <LinkOverlay>{item}</LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
