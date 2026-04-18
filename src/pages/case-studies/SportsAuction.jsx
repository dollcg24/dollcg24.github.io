import { useNavigate } from 'react-router-dom'
import { FiClock, FiUsers, FiBriefcase, FiTool } from 'react-icons/fi'
import {
  ThemeContext, CaseStudyContainer, CaseStudyHeader,
  Section, Subtitle, SubSubtitle, Paragraph,
  BulletList, ListItem, ImageStrip, PersonaCard, StatCard, MetaGrid,
} from '../../components/ui'
import SEO from '../../components/SEO'

export default function SportsAuctionCaseStudy({ isDark }) {
  const navigate = useNavigate()

  return (
    <ThemeContext.Provider value={isDark}>
      <SEO
        title="AucBuzz – Sports Auction App"
        description="UX case study on AucBuzz, a digital platform for live sports player auctions."
        path="/sports-auction"
        image="/images/sports-auction/thumbnail.webp"
      />
      <CaseStudyContainer>

        <CaseStudyHeader
          title="Sports Auction Application"
          meta="AucBuzz · Oct 2024 – Feb 2025"
          thumbnail="/images/sports-auction/thumbnail.webp"
          onBack={() => {
            navigate('/')
            setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 650)
          }}
        />

        <div className="pt-12 space-y-14 sm:space-y-16">

          <Section>
            <Subtitle>Overview</Subtitle>
            <Paragraph>
              AucBuzz is a digital platform designed to facilitate sports player auctions for tournaments and events. The platform enables tournament organizers to create events, manage player databases, and conduct live auctions with real-time bidding capabilities.
            </Paragraph>
          </Section>

          <Section>
            <Subtitle>Problem Statement</Subtitle>
            <Paragraph>
              Tournament organizers struggle with manual processes for conducting player auctions, often relying on spreadsheets and paper-based systems that are time-consuming, error-prone, and lack transparency for participants.
            </Paragraph>
          </Section>

          <Section>
            <Subtitle>Users</Subtitle>
            <Paragraph>
              <BulletList>
                <ListItem title="Primary" description="Tournament organizers and event managers" />
                <ListItem title="Secondary" description="Team captains/owners participating in auctions" />
                <ListItem title="Tertiary" description="Players being auctioned and spectators" />
              </BulletList>
            </Paragraph>
          </Section>

          <Section>
            <Subtitle>User Personas</Subtitle>
            <div className="grid grid-cols-1 gap-5">
              <PersonaCard
                bgColor="bg-[#7B3D20]/90"
                name="Sarah"
                role="Tournament Organizer"
                image="/images/shared/persona-female.webp"
                items={[
                  { label: 'Age', description: '28–45' },
                  { label: 'Role', description: 'Event Coordinator' },
                  { label: 'Tech Savviness', description: 'Medium to high' },
                ]}
                goals={['Efficient auction management', 'Transparent process', 'Professional presentation']}
                painPoints={['Manual calculations', 'Crowd management', 'Technical difficulties']}
              />
              <PersonaCard
                bgColor="bg-[#3A2616]/95"
                name="Raj"
                role="Team Captain"
                image="/images/shared/persona-male.webp"
                items={[
                  { label: 'Age', description: '25–40' },
                  { label: 'Role', description: 'Team owner / captain' },
                  { label: 'Tech Savviness', description: 'Medium' },
                ]}
                goals={['Strategic bidding', 'Player information access', 'Budget management']}
                painPoints={['Unclear auction rules', 'Missed opportunities', 'Information overload']}
              />
            </div>
          </Section>

          <Section>
            <Subtitle>Information Architecture</Subtitle>
            <Paragraph>
              The current system had structural issues including a deep navigation hierarchy, inconsistent categorization, and poor search functionality.
            </Paragraph>
            <div
              className="rounded-2xl overflow-hidden border p-6"
              style={{ background: isDark ? '#1F130A' : '#EDE2D1', borderColor: isDark ? '#2E1F12' : '#E2D5C0' }}
            >
              <img src="/images/sports-auction/flow.webp" alt="AucBuzz information architecture flow" className="w-full h-auto block" />
            </div>
          </Section>

          <Section>
            <Subtitle>Key Interface Improvements</Subtitle>
            <div className="space-y-8">
              <Section>
                <SubSubtitle>Enhanced Auction Interface</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem title="Dual-Screen Layout" description="Auctioneer view and public display" />
                    <ListItem title="Quick Actions" description="One-click bid acceptance/rejection" />
                    <ListItem title="Visual Indicators" description="Clear status for each player/team" />
                    <ListItem title="Emergency Controls" description="Pause, undo, and reset functions" />
                  </BulletList>
                </Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Mobile-First Player Database</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem title="Smart Search" description="Filters by position, skill level, price range" />
                    <ListItem title="Visual Cards" description="Photo-based player representation" />
                  </BulletList>
                </Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Live Auction Experience</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem title="Bidding Controls" description="Large, accessible buttons" />
                    <ListItem title="Team Status" description="Real-time budget and roster updates" />
                    <ListItem title="Auction Timeline" description="Progress indicator" />
                    <ListItem title="Player Spotlight" description="Featured player with detailed stats" />
                  </BulletList>
                </Paragraph>
              </Section>
            </div>
          </Section>

          <Section>
            <Subtitle>Designs</Subtitle>
            <ImageStrip images={[
              { src: '/images/sports-auction/teams-desktop.webp', alt: 'Teams interface desktop', label: 'Player Teams — Desktop' },
              { src: '/images/sports-auction/teams-mobile.webp', alt: 'Teams interface mobile', label: 'Teams — Mobile' },
              { src: '/images/sports-auction/players-mobile.webp', alt: 'Players interface mobile', label: 'Players — Mobile' },
              { src: '/images/sports-auction/auction.webp', alt: 'Auction interface desktop', label: 'Auction Interface — Desktop' },
            ]} />
          </Section>

          <Section>
            <Subtitle>Insights</Subtitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <SubSubtitle>Before Redesign</SubSubtitle>
                <div className="grid gap-3">
                  <StatCard label="Task Completion" value="67%" accent="text-red-500" />
                  <StatCard label="Error Rate" value="23%" accent="text-red-500" />
                  <StatCard label="User Satisfaction" value="3.2 / 5" accent="text-yellow-500" />
                </div>
              </div>
              <div className="space-y-3">
                <SubSubtitle>After Redesign</SubSubtitle>
                <div className="grid gap-3">
                  <StatCard label="Task Completion" value="89%" accent="text-green-500" />
                  <StatCard label="Error Rate" value="8%" accent="text-green-500" />
                  <StatCard label="User Satisfaction" value="4.3 / 5" accent="text-green-500" />
                </div>
              </div>
            </div>
          </Section>

          <Section>
            <Subtitle>Conclusion</Subtitle>
            <Paragraph>
              The AucBuzz platform represents a significant opportunity to transform how sports player auctions are conducted — moving from manual, error-prone processes to streamlined digital experiences. Through comprehensive user research and design analysis, this case study identified critical areas for improvement that substantially enhanced user satisfaction and platform adoption.
            </Paragraph>
          </Section>

        </div>
      </CaseStudyContainer>
    </ThemeContext.Provider>
  )
}
