import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { ThemeContext, CaseStudyContainer, Section, Subtitle, SubSubtitle, Paragraph, BulletList, ListItem, ImageFrame, PersonaCard } from '../../components/ui'

function StatCard({ label, value, accent }) {
  const isDark = useContext(ThemeContext)
  return (
    <div className={`rounded-2xl px-6 py-5 flex flex-col gap-1 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <span className={`text-2xl sm:text-3xl font-bold ${accent}`}>{value}</span>
      <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</span>
    </div>
  )
}

export default function SportsAuctionCaseStudy({ isDark }) {
  const navigate = useNavigate()

  return (
    <ThemeContext.Provider value={isDark}>
      <CaseStudyContainer>

        {/* Header */}
        <div className="flex items-start gap-4">
          <button
            onClick={() => navigate('/')}
            className={`flex-shrink-0 rounded-full border p-2 cursor-pointer hover:scale-105 transition-all ${isDark ? 'border-gray-600 text-gray-300 hover:border-gray-400' : 'border-gray-900 text-gray-900'}`}
            aria-label="Go back"
          >
            <FiArrowLeft size={22} />
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            Sports Auction Application: Case Study
          </h1>
        </div>

        {/* Overview */}
        <Section>
          <Subtitle>AucBuzz</Subtitle>
          <Paragraph>
            AucBuzz is a digital platform designed to facilitate sports player auctions for tournaments and events. The platform enables tournament organizers to create events, manage player databases, and conduct live auctions with real-time bidding capabilities. This case study examines the user experience design challenges and opportunities for improving the platform's usability and engagement.
          </Paragraph>
        </Section>

        {/* Problem Statement */}
        <Section>
          <Subtitle>Problem Statement</Subtitle>
          <Paragraph>
            Tournament organizers struggle with manual processes for conducting player auctions, often relying on spreadsheets and paper-based systems that are time-consuming, error-prone, and lack transparency for participants.
          </Paragraph>
        </Section>

        {/* Users */}
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

        {/* User Personas */}
        <Section>
          <Subtitle>User Personas</Subtitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <PersonaCard
              bgColor="bg-[#8F0000]/80"
              name="Sarah"
              role="Tournament Organizer"
              image="/images/shared/persona-female.png"
              items={[
                { label: 'Age', description: '28–45' },
                { label: 'Role', description: 'Event Coordinator' },
                { label: 'Tech Savviness', description: 'Medium to high' },
              ]}
              goals={['Efficient auction management', 'Transparent process', 'Professional presentation']}
              painPoints={['Manual calculations', 'Crowd management', 'Technical difficulties']}
            />
            <PersonaCard
              bgColor="bg-[#002A5A]/90"
              name="Raj"
              role="Team Captain"
              image="/images/shared/persona-male.png"
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

        {/* Information Architecture */}
        <Section>
          <Subtitle>Information Architecture Redesign</Subtitle>
          <Paragraph>
            The current system had structural issues including a deep navigation hierarchy, inconsistent categorization, and poor search functionality.
          </Paragraph>
          <ImageFrame src="/images/sports-auction/flow.png" alt="AucBuzz information architecture flow" />
        </Section>

        {/* Key Interface Improvements */}
        <Section>
          <Subtitle>Key Interface Improvements</Subtitle>

          <div className="space-y-6 sm:space-y-8">
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
              <SubSubtitle>Dashboard Redesign</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem title="Card-based Layout" description="Categorized information blocks" />
                  <ListItem title="Action-oriented Design" description="Prominent CTAs for common tasks" />
                  <ListItem title="Quick Stats" description="Key metrics at a glance" />
                  <ListItem title="Team Rosters" description="Live updates of team compositions" />
                  <ListItem title="Sponsor Integration" description="Branded elements and advertisements" />
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

        {/* Designs */}
        <Section>
          <Subtitle>Designs</Subtitle>

          <Section>
            <SubSubtitle>Player Teams Interface — Desktop</SubSubtitle>
            <ImageFrame src="/images/sports-auction/teams-desktop.png" alt="Teams interface desktop" />
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Section>
              <SubSubtitle>Teams Interface — Mobile</SubSubtitle>
              <ImageFrame src="/images/sports-auction/teams-mobile.png" alt="Teams interface mobile" />
            </Section>
            <Section>
              <SubSubtitle>Player Interface — Mobile</SubSubtitle>
              <ImageFrame src="/images/sports-auction/players-mobile.png" alt="Players interface mobile" />
            </Section>
          </div>

          <Section>
            <SubSubtitle>Auction Interface — Desktop</SubSubtitle>
            <ImageFrame src="/images/sports-auction/auction.png" alt="Auction interface desktop" />
          </Section>
        </Section>

        {/* Insights */}
        <Section>
          <Subtitle>Insights</Subtitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4">
              <SubSubtitle>Before Redesign</SubSubtitle>
              <div className="grid grid-cols-1 gap-3">
                <StatCard label="Task Completion" value="67%" accent="text-red-500" />
                <StatCard label="Error Rate" value="23%" accent="text-red-500" />
                <StatCard label="User Satisfaction" value="3.2 / 5" accent="text-yellow-500" />
              </div>
            </div>
            <div className="space-y-4">
              <SubSubtitle>After Redesign</SubSubtitle>
              <div className="grid grid-cols-1 gap-3">
                <StatCard label="Task Completion" value="89%" accent="text-green-500" />
                <StatCard label="Error Rate" value="8%" accent="text-green-500" />
                <StatCard label="User Satisfaction" value="4.3 / 5" accent="text-green-500" />
              </div>
            </div>
          </div>
        </Section>

        {/* Conclusion */}
        <Section>
          <Subtitle>Conclusion</Subtitle>
          <Paragraph>
            The AucBuzz platform represents a significant opportunity to transform how sports player auctions are conducted, moving from manual, error-prone processes to streamlined digital experiences. Through comprehensive user research and design analysis, this case study has identified critical areas for improvement that can substantially enhance user satisfaction and platform adoption.
          </Paragraph>
        </Section>

      </CaseStudyContainer>
    </ThemeContext.Provider>
  )
}
