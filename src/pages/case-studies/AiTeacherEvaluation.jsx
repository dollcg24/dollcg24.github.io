import { useNavigate } from 'react-router-dom'
import { FiClock, FiUsers, FiBriefcase, FiTool } from 'react-icons/fi'
import {
  ThemeContext, CaseStudyContainer, CaseStudyHeader,
  Section, Subtitle, SubSubtitle, Paragraph,
  BulletList, ListItem, ImageStrip, StatCard, MetaGrid,
} from '../../components/ui'
import SEO from '../../components/SEO'

export default function AiTeacherEvaluationCaseStudy({ isDark }) {
  const navigate = useNavigate()

  return (
    <ThemeContext.Provider value={isDark}>
      <SEO
        title="Integrating AI in Teacher Evaluation – LMS"
        description="UX case study on integrating AI-powered teacher evaluation tools into an LMS, improving assessment accuracy and reducing bias."
        path="/ai-teacher-evaluation"
        image="/images/ai-teacher-evaluation/thumbnail.webp"
      />
      <CaseStudyContainer>

        <CaseStudyHeader
          title="Integrating AI in Teacher Evaluation"
          meta="LMS Feature · Jun 2024 – Aug 2024"
          thumbnail="/images/ai-teacher-evaluation/thumbnail.webp"
          onBack={() => {
            navigate('/')
            setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 650)
          }}
        />

        <div className="pt-12 space-y-14 sm:space-y-16">

          <Section>
            <Subtitle>Overview</Subtitle>
            <Paragraph>
              This project outlines the UX design for an AI-powered teacher evaluation feature within a grade submission platform. The goal is to assist teachers in efficiently grading essay-type questions using AI, while providing transparency and control over the evaluation process.
            </Paragraph>
            <MetaGrid items={[
              { icon: FiClock,     label: 'Duration',  value: '4 months' },
              { icon: FiUsers,     label: 'Team Size', value: '4 Designers' },
              { icon: FiBriefcase, label: 'Role',      value: 'Sr. UX Designer' },
              { icon: FiTool,      label: 'Tools',     value: 'Adobe XD, MS Excel' },
            ]} />
          </Section>

          <Section>
            <Subtitle>Problem Statement</Subtitle>
            <Paragraph>
              Teachers face significant time constraints when grading essay-type questions, leading to delays in providing feedback and increasing workload. Manual evaluation can also introduce inconsistencies in grading across students.
            </Paragraph>
          </Section>

          <Section>
            <Subtitle>User Journey Mapping</Subtitle>
            <Paragraph>
              We mapped the complete teacher evaluation journey from quiz selection to final grade submission, identifying key decision points and potential friction areas.
            </Paragraph>
            <SubSubtitle>Critical User Needs</SubSubtitle>
            <Paragraph>
              <BulletList>
                <ListItem description="Quick overview of pending evaluations" />
                <ListItem description="Flexible evaluation workflows" />
                <ListItem description="Transparency in AI scoring decisions" />
                <ListItem description="Ability to modify AI recommendations" />
                <ListItem description="Efficient navigation between students/questions" />
              </BulletList>
            </Paragraph>
          </Section>

          <Section>
            <Subtitle>Solution</Subtitle>
            <div className="space-y-8">
              <Section>
                <SubSubtitle>Evaluation Dashboard</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem description="Mandatory filters (Class, Course, Quiz) to prevent overwhelming data display" />
                    <ListItem description="Clear metrics showing submission counts and pending evaluations" />
                    <ListItem description="Toggle between question-focused and student-focused workflows" />
                  </BulletList>
                </Paragraph>
              </Section>
              <Section>
                <SubSubtitle>AI Evaluator Selection — Three-Tier System</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem title="Lenient" description="More forgiving scoring approach" />
                    <ListItem title="Moderate" description="Balanced evaluation" />
                    <ListItem title="Strict" description="Rigorous scoring standards" />
                  </BulletList>
                </Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Smart Scoring Interface</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem description="Visual indicators showing AI vs. teacher selections" />
                    <ListItem description="Expandable reasoning for each scoring decision" />
                    <ListItem description="One-click rating modifications with optional teacher explanations" />
                    <ListItem description="Reset functionality to revert to AI scoring" />
                  </BulletList>
                </Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Comprehensive Review System — Three Tabs</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem title="Smart Scoring" description="Rubric-based content evaluation" />
                    <ListItem title="Exemplar Responses" description="Reference materials for consistent grading" />
                    <ListItem title="Grammar Check" description="Automated error detection with manual override" />
                  </BulletList>
                </Paragraph>
              </Section>
            </div>
          </Section>

          <Section>
            <Subtitle>Design Decisions</Subtitle>
            <div className="space-y-6">
              <Section>
                <SubSubtitle>Color Coding</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem description="AI selections marked with distinct AI icons" />
                    <ListItem description="Teacher modifications highlighted with teacher icons" />
                    <ListItem description="Clear visual separation between AI and human input" />
                  </BulletList>
                </Paragraph>
              </Section>
              <Section>
                <SubSubtitle>Information Density</SubSubtitle>
                <Paragraph>
                  <BulletList>
                    <ListItem description="Expandable sections to manage cognitive load" />
                    <ListItem description='"Hide/Show Scoring Reasons" toggle for focus control' />
                    <ListItem description="Card-based layout for easy scanning and selection" />
                  </BulletList>
                </Paragraph>
              </Section>
            </div>
          </Section>

          <Section>
            <Subtitle>Designs</Subtitle>
            <ImageStrip images={[
              { src: '/images/ai-teacher-evaluation/screen-1.webp', alt: 'Teacher Evaluation Page', label: 'Teacher Evaluation Page' },
              { src: '/images/ai-teacher-evaluation/screen-2.webp', alt: 'Selecting AI for Evaluation', label: 'Selecting AI for Evaluation' },
              { src: '/images/ai-teacher-evaluation/screen-3.webp', alt: 'AI Evaluation in Progress', label: 'AI Evaluation in Progress' },
              { src: '/images/ai-teacher-evaluation/screen-4.webp', alt: 'AI Evaluation Complete', label: 'AI Evaluation Complete' },
            ]} />
          </Section>

          <Section>
            <Subtitle>Conclusion & Insights</Subtitle>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-6">
              <StatCard value="91%" label="Teacher satisfaction with the evaluation system" accent="text-green-500" />
              <StatCard value="89%" label="Teachers evaluated successfully without assistance" accent="text-green-500" />
            </div>
            <Paragraph>
              <BulletList>
                <ListItem description="Prioritizing transparency, flexibility, and teacher agency created a tool that enhances rather than replaces human judgment in educational assessment." />
                <ListItem description="The key to success was treating AI as an intelligent assistant — allowing teachers to maintain their essential role while dramatically reducing administrative burden." />
              </BulletList>
            </Paragraph>
          </Section>

          <Section>
            <Subtitle>Future Opportunities</Subtitle>
            <Paragraph>
              <BulletList>
                <ListItem description="Mobile-optimized interfaces for tablet grading flexibility" />
                <ListItem description="Batch operations across multiple similar responses" />
                <ListItem description="Analytics dashboard for grading pattern insights" />
                <ListItem description="Predictive grading suggestions based on teacher patterns" />
                <ListItem description="Collaborative grading features for team-taught courses" />
              </BulletList>
            </Paragraph>
          </Section>

        </div>
      </CaseStudyContainer>
    </ThemeContext.Provider>
  )
}
