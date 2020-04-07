import fortuneLogo from '../assets/images/media-logos/FORTUNE.png';
import seraphimLogo from '../assets/images/media-logos/SeraphimCapital.png';
import chiInnoLogo from '../assets/images/media-logos/ChiInno_Logo2.png';
import builtInChicago50Logo from '../assets/images/media-logos/BuilInChi50.png';
import businessWireLogo from '../assets/images/media-logos/bwlogo_extreme.png';
import geospatialWorldLogo from '../assets/images/media-logos/geospatialWorld.png'
import builtInLogo from '../assets/images/media-logos/builtin.png'
import digitalInsuraceLogo from '../assets/images/media-logos/DigitalInsuranceLogo.svg'
import aiThorityLogo from '../assets/images/media-logos/aithority_logo.png';
import carrierManagementLogo from '../assets/images/media-logos/carrier-management.png';
import claimsJournalLogo from '../assets/images/media-logos/claims-journal-logo.png';
import crowdfundInsiderLogo from '../assets/images/media-logos/crowdfundinsider.webp';
import prWebLogo from '../assets/images/media-logos/prWeb.png';
import propertyCasualty360Logo from '../assets/images/media-logos/propertyCasualty360.png';
import arturoLogo from '../assets/images/arturo_favicon.svg';

export const sources = {
    aiThority: { name: 'AiThority', image: aiThorityLogo},
    americanInno: { name: 'Chicago Inno', image: chiInnoLogo },
    arturo: { name: 'Arturo', image: arturoLogo },
    builtIn: { name: 'Built In', image: builtInLogo}, // TODO: get better image
    businessWire: { name: 'Business Wire', image: businessWireLogo},
    carrierManagement: { name: 'Carrier Management', image: carrierManagementLogo},
    claimsJournal: { name: 'Claims Journal', image: claimsJournalLogo},
    crowdfundInsider: { name: 'Crowdfund Insider', image: crowdfundInsiderLogo},
    digIn: { name: 'Digital Insurance', image: digitalInsuraceLogo},
    fortune: { name: 'Fortune', image: fortuneLogo },
    geospatialWorld: { name: 'Geospatial World', image: geospatialWorldLogo},
    propertyCasualty360: { name: 'Property Casualty 360', image: propertyCasualty360Logo},
    prWeb: { name: 'PRWeb', image: prWebLogo},
    seraphim: { name: 'Seraphim Capital', image: seraphimLogo },
}


const mediaMentions = [
    {
        date: 'April 7th, 2020',
        title: 'Arturo Secures $8 Million in Series A Funding to Advance ML and AI in the Insurance Market',
        mediaSource: sources.arturo,
        link: "./assets/documents/Arturo%20Series%20A%20Media%20Release%20FINAL%20040720.pdf",
        type: 'pdf'
    },
    {
        date: 'February 4th, 2020',
        title: 'Labelbox Round Raised (Includes Quotes From Arturo)',
        mediaSource: sources.fortune,
        link: "//fortune.com/2020/02/04/artificial-intelligence-data-labeling-labelbox/"
    },
    {
        date: 'February 3, 2020',
        title: 'Space Tech Map 2020',
        mediaSource: sources.seraphim,
        link: '//seraphimcapital.passle.net/post/102fxy3/space-tech-map-2020-emerging-vc-backed-leaders'
    },
    {
        date: 'January 24, 2020',
        title: 'Chicago Inno Start Ups to Watch Event',
        mediaSource: sources.americanInno,
        link: '//www.americaninno.com/chicago/state-of-innovation/2020-vision-what-you-missed-at-chicago-innos-startups-to-watch-event-photos/'
    },
    {
        date: 'January 21, 2020',
        title: 'Startups to Watch 2020',
        mediaSource: {...sources.builtIn, image: builtInChicago50Logo},
        link: '//www.builtinchicago.org/2020/01/21/50-chicago-startups-watch-2020'
    },
    {
        date: 'December 19,2019',
        title: 'Startups to Watch 2020',
        mediaSource: sources.americanInno,
        link: '//www.americaninno.com/chicago/20-Startups-to-Watch-in-2020-chi'
    },
    {
        date: 'September 23,2019',
        title: 'Partnership with Branch',
        mediaSource: sources.businessWire,
        link: '//www.businesswire.com/news/home/20190923005741/en/Arturo-Branch-Announce-Partnership-Integrate-Arturo%E2%80%99s-Deep'
    },
    {
        date: 'September 19,2019',
        title: 'Neil Pearson joins team',
        mediaSource: sources.businessWire,
        link: '//www.businesswire.com/news/home/20190919005647/en/Arturo-Announces-Addition-Leadership-Team-Neil-Pearson'
    },
    {
        date: 'September 18,2019',
        title: 'Team up with GIC',
        mediaSource: sources.geospatialWorld,
        link: '//www.geospatialworld.net/news/geospatial-insurance-consortium-analytics-manage-risk/'
    },
    {
        date: 'September 11,2019',
        title: 'Partnership with Hippo',
        mediaSource: sources.digIn,
        link: '//www.dig-in.com/news/home-insurtech-hippo-partners-with-american-family-analytics-unit'
    },
    {
        date: 'August 23, 2019',
        title: 'Tech Companies Redefining Insurance',
        mediaSource: sources.builtIn,
        link: '//www.builtinchicago.org/2017/08/23/chicago-insurance-startups'
    },
    {
        date: 'August 13, 2019',
        title: 'Partnership with Canopius',
        mediaSource: sources.aiThority,
        link: '//www.aithority.com/technology/analytics/arturo-deep-learning-property-analytics-to-enhance-canopius-risk-selection/'
    },
    {
        date: 'August 12, 2019',
        title: 'Partnership with Canopius',
        mediaSource: sources.businessWire,
        link: '//www.businesswire.com/news/home/20190812005552/en/Arturo-deep-learning-property-analytics-enhance-Canopius-risk'
    },
    {
        date: 'July 29, 2019',
        title: 'The Details on Arturo Q&A',
        mediaSource: sources.carrierManagement,
        link: '//www.carriermanagement.com/news/2019/07/29/195946.htm'
    },
    {
        date: 'July 29, 2019',
        title: 'Partnership with Hippo',
        mediaSource: sources.claimsJournal,
        link: '//www.claimsjournal.com/news/national/2019/07/11/291904.htm'
    },
    {
        date: 'July 22, 2019',
        title: 'Partnership with Hippo',
        mediaSource: sources.crowdfundInsider,
        link: '//www.crowdfundinsider.com/2019/07/149749-arturo-announces-new-partnership-with-insurtech-hippo-insurance/'
    },
    {
        date: 'July 11, 2019',
        title: 'Partnership with Hippo',
        mediaSource: sources.carrierManagement,
        link: '//www.carriermanagement.com/news/2019/07/11/195322.htm'
    },
    {
        date: 'July 11, 2019',
        title: 'Partnership with Hippo',
        mediaSource: sources.claimsJournal,
        link: '//www.claimsjournal.com/news/national/2019/07/11/291904.htm'
    },
    {
        date: 'July 11, 2019',
        title: 'Partnership with Hippo',
        mediaSource: sources.prWeb,
        link: '//www.prweb.com/releases/arturo_partners_with_hippo_insurance_to_provide_homeowners_better_pricing_underwriting_and_renewals/prweb16430015.htm'
    },
    {
        date: 'June 5, 2019',
        title: 'Around the P&C Insurance Industry',
        mediaSource: sources.propertyCasualty360,
        link: '//www.propertycasualty360.com/2019/06/05/around-the-pc-insurance-industry-june-5-2019/'
    },
    {
        date: 'May 28, 2019',
        title: 'Spin out from AmFam',
        mediaSource: sources.americanInno,
        link: '//www.americaninno.com/chicago/first-look/amfam-born-ai-startup-comes-out-of-stealth-mode-lands-seed-round/'
    },
    {
        date: 'May 28, 2019',
        title: 'Spin out from AmFam',
        mediaSource: sources.businessWire,
        link: '//www.businesswire.com/news/home/20190528005147/en/Arturo-Announces-Seed-Series-Close-Spin-out-American'
    },
]

export default mediaMentions;