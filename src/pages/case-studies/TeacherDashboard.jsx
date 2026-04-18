import { useNavigate } from 'react-router-dom'
import { FiClock, FiUsers, FiBriefcase, FiTool } from 'react-icons/fi'
import {
  ThemeContext, CaseStudyContainer, CaseStudyHeader,
  Section, Subtitle, SubSubtitle, Paragraph,
  BulletList, ListItem, ImageStrip, MetaGrid,
} from '../../components/ui'
import SEO from '../../components/SEO'

export default function TeacherDashboardCaseStudy({ isDark }) {
  const navigate = useNavigate()

  return (
    <ThemeContext.Provider value={isDark}>
      <SEO
        title="Overhauling Teacher Dashboard in LMS"
        description="UX case study on redesigning a teacher dashboard in an LMS to provide actionable insights and improved teaching effectiveness."
        path="/teacher-dashboard"
        image="/images/teacher-dashboard/thumbnail.webp"
      />
      <CaseStudyContainer>

        <CaseStudyHeader
          title="Overhauling Teacher Dashboard in LMS"
          meta="LMS Redesign · Aug 2024 – Nov 2024"
          thumbnail="/images/teacher-dashboard/thumbnail.webp"
          onBack={() => {
            navigate('/')
            setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 650)
          }}
        />

        <div className="pt-12 space-y-14 sm:space-y-16">

          <Section>
            <Subtitle>Problem Statement</Subtitle>
            <Paragraph>
              The previous dashboard, while functional, lacked actionable insights and a clear hierarchy of information, leading to teacher inefficiencies and potential oversight of critical tasks. The revamped dashboard aims to transform the teacher experience by providing a personalized, task-oriented, and insightful overview of their daily responsibilities.
            </Paragraph>
            <MetaGrid items={[
              { icon: FiClock,     label: 'Duration',  value: '4 months' },
              { icon: FiUsers,     label: 'Team Size', value: '4 Designers' },
              { icon: FiBriefcase, label: 'Role',      value: 'Sr. UX Designer' },
              { icon: FiTool,      label: 'Tools',     value: 'Adobe XD, MS Excel' },
            ]} />
          </Section>

          <Section>
            <Subtitle>Pain Points</Subtitle>
            <div className="space-y-6">
              <Section>
                <SubSubtitle>Lack of Prioritization</SubSubtitle>
                <Paragraph>Teachers struggled to quickly identify urgent tasks. The dashboard offered no visual cues for impending deadlines or overdue items.</Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Inefficient Workflow</SubSubtitle>
                <Paragraph>To check for new submissions or pending grades, teachers had to navigate deeply into individual courses, consuming valuable time.</Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Limited Insight</SubSubtitle>
                <Paragraph>The dashboard provided no proactive insights into student engagement, common areas of difficulty, or trends in teaching activities.</Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Missed Opportunities</SubSubtitle>
                <Paragraph>Teachers occasionally missed grading deadlines due to the absence of a central, actionable reminder system.</Paragraph>
              </Section>
            </div>
          </Section>

          <Section>
            <Subtitle>Solution</Subtitle>
            <Paragraph>
              <p className="font-semibold mb-3">A Data-Driven, Actionable, and Personalized Dashboard</p>
            </Paragraph>
            <SubSubtitle>Design Principles</SubSubtitle>
            <Paragraph>
              <BulletList>
                <ListItem title="Actionability" description="Every element should prompt an action or provide insight for decision-making." />
                <ListItem title="Prioritization" description="Urgent and important tasks should be immediately visible." />
                <ListItem title="Personalization" description="The dashboard adapts to the individual teacher's current workload and priorities." />
                <ListItem title="Clarity & Simplicity" description="Information presented clearly and concisely, minimizing cognitive load." />
                <ListItem title="Consistency" description="Consistent design language across the entire LMS." />
              </BulletList>
            </Paragraph>
          </Section>

          <Section>
            <Subtitle>Key Features</Subtitle>
            <div className="space-y-8">
              <Section>
                <SubSubtitle>Personalized Welcome & Resume Flow</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem title="Purpose" description="Quick access to recent work with a personal touch." />
                    <ListItem title="Design" description='A "Pick up where you left off" section with a direct Resume button linking to the last active course.' />
                    <ListItem title="Benefit" description="Reduces friction for continuing work." />
                  </BulletList>
                </Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Tabbed Navigation for Courses & Grading</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem title="Purpose" description="Clearly separates and organizes core teacher workflows." />
                    <ListItem title="Benefit" description="Improves information architecture and allows teachers to focus on specific task categories." />
                  </BulletList>
                </Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Items for Grading Module</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem title="Purpose" description="Centralizes all pending grading tasks from across all assigned courses." />
                    <ListItem title="Design" description="A dedicated Grading tab with course filter, overdue submissions toggle, and a clear assignment list with direct grading links." />
                    <ListItem title="Benefit" description="Prevents missed grading and improves turnaround times." />
                  </BulletList>
                </Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Calendar & Notifications Module</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem title="Purpose" description="Holistic view of schedule and real-time alerts." />
                    <ListItem title="Design" description="Interactive calendar widget with highlighted activity dates and a notifications stream below." />
                    <ListItem title="Benefit" description="Keeps teachers informed without needing to actively seek information." />
                  </BulletList>
                </Paragraph>
              </Section>
            </div>
          </Section>

          <Section>
            <Subtitle>Designs</Subtitle>
            <Section>
              <SubSubtitle>Wireframes</SubSubtitle>
              <ImageStrip images={[
                { src: '/images/teacher-dashboard/lofi-v1.webp', alt: 'Low-fidelity wireframe v1', label: 'Lo-fi Wireframe v1' },
                { src: '/images/teacher-dashboard/lofi-v2.webp', alt: 'Low-fidelity wireframe v2', label: 'Lo-fi Wireframe v2' },
                { src: '/images/teacher-dashboard/hifi-v1.webp', alt: 'High-fidelity wireframe v1', label: 'Hi-fi Wireframe v1' },
                { src: '/images/teacher-dashboard/hifi-v2.webp', alt: 'High-fidelity wireframe v2', label: 'Hi-fi Wireframe v2' },
              ]} />
            </Section>
            <Section>
              <SubSubtitle>Final Designs</SubSubtitle>
              <ImageStrip images={[
                { src: '/images/teacher-dashboard/final-v1.webp', alt: 'Final design 1', label: 'Final Design v1' },
                { src: '/images/teacher-dashboard/final-v2.webp', alt: 'Final design 2', label: 'Final Design v2' },
              ]} />
            </Section>
          </Section>

          <Section>
            <Subtitle>Outcomes & Impact</Subtitle>
            <div className="space-y-6">
              <Section>
                <SubSubtitle>Reduced Navigation Time</SubSubtitle>
                <Paragraph>Direct View/Launch buttons and the consolidated Grading tab significantly reduce clicks required to find relevant tasks.</Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Faster Grading Turnaround</SubSubtitle>
                <Paragraph>The dedicated Grading tab with filtering and overdue submissions toggle directly addresses efficient grading management.</Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Improved Teacher Satisfaction</SubSubtitle>
                <Paragraph>The cleaner, modern interface and actionable information naturally leads to higher satisfaction. Teachers feel more organized and in control.</Paragraph>
              </Section>
            </div>
          </Section>

          <Section>
            <Subtitle>Insights</Subtitle>
            <Paragraph>
              <BulletList>
                <ListItem description="Involving teachers throughout the design process was crucial to creating a truly useful and adopted solution." />
                <ListItem description="An insights-driven dashboard heavily relies on robust data integration from various system modules." />
                <ListItem description="A phased rollout and agile development approach allowed for continuous improvement and mitigated risk." />
                <ListItem description="A well-designed product needs effective communication and training to ensure user adoption." />
              </BulletList>
            </Paragraph>
          </Section>

        </div>
      </CaseStudyContainer>
    </ThemeContext.Provider>
  )
}
