import { Flex, Link, Text, Box } from "rebass";
import styled, { useTheme } from "styled-components";
import Logo from '../components/Logo';
import GridBackground from '../components/GridBackground';
import Button from "./Button";

const Footer = (props: any) => {
  const theme: any = useTheme();

  const FooterLinks = [
    {
      heading: 'ABOUT',
      links: [
        {
          label: 'Faq',
          href: '#'
        },
        {
          label: 'Blog',
          href: '#'
        },
        {
          label: 'Audits',
          href: '#'
        },
        {
          label: 'Brand Assets',
          href: '#'
        },
      ]
    },
    {
      heading: 'COMMUNITY',
      links: [
        {
          label: 'Discord',
          href: '#'
        },
        {
          label: 'Twitter',
          href: '#'
        },
        {
          label: 'Keybase',
          href: '#'
        },
        {
          label: 'Brand Forum',
          href: '#'
        },
      ]
    },
    {
      heading: 'DOCUMENTATION',
      links: [
        {
          label: 'FIY Liq. Mining',
          href: '#'
        },
        {
          label: 'Roadmap',
          href: '#'
        },
        {
          label: 'We\'re hiring ',
          href: '#'
        },
        {
          label: 'Token',
          href: '#'
        },
      ]
    },
    {
      heading: 'ANALYTICS',
      links: [
        {
          label: 'FIY Liq. Mining',
          href: '#'
        },
      ]
    },
  ];

  return (
    <Flex
      as="footer"
      pt={"4.8rem"}
      pb={'5.6rem'}
      bg={theme.colors.gray10}
      sx={{
        position: "relative",
        flexDirection: 'column'
      }}
    >
      <Box sx={{position: 'absolute', width: '100%', height: ['10rem', '20rem'], top: 0, left: 0}}>
        <GridBackground color={theme.colors.gray9} top={"4.7rem"} />
      </Box>
      <Flex sx={{ ...theme.boxSizes.defaultBox, position: "relative", flexDirection: 'column' }}>
        <Logo color={theme.colors.orange6} mb={"4.8rem"} sx={{ zIndex: 1 }} />
        <Flex as="ul" flexWrap="wrap">
          {FooterLinks.map((footerColumn, index) => (
            <Flex flexDirection="column" width={[1/2]} mb={'4.8rem'} fontFamily={'IBM Plex Mono'}>
              <Text fontSize={'1.4rem'} color={theme.colors.gray1} mb={'0.8rem'}>
                {footerColumn.heading}
              </Text>
              {footerColumn.links.map((link, index) => (
                <Link href={link.href} mb={'0.4rem'} color={theme.colors.gray1} fontSize={'1.2rem'}>
                  {link.label}
                </Link>
              ))}
            </Flex>
          ))}
        </Flex>
        <Button>CARROT DAPP</Button>
      </Flex>
    </Flex>
  );
};

const StyledFooter = styled(Flex)``;

export default Footer;
