import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiClock, FiUsers, FiBriefcase, FiTool } from 'react-icons/fi'
import { ThemeContext, CaseStudyContainer, Section, Subtitle, SubSubtitle, Paragraph, BulletList, ListItem, ImageFrame } from '../../components/ui'

function MetaItem({ icon: Icon, label, value }) {
  const isDark = useContext(ThemeContext)
  return (
    <div className="flex items-start gap-2">
      <Icon size={15} className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
      <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        <span className="font-semibold">{label}:</span> {value}
      </span>
    </div>
  )
}

export default function TeacherDashboardCaseStudy({ isDark }) {
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
            Overhauling Teacher Dashboard in LMS
          </h1>
        </div>

        {/* Problem Statement */}
        <Section>
          <Subtitle>Problem Statement</Subtitle>
          <Paragraph>
            This project outlines the process and impact of a significant overhaul of the teacher dashboard within a learning management system. The previous dashboard, while functional, lacked actionable insights and a clear hierarchy of information, leading to teacher inefficiencies and potential oversight of critical tasks. The revamped dashboard aims to transform the teacher experience by providing a personalized, task-oriented, and insightful overview of their daily responsibilities, leading to improved teaching effectiveness and student outcomes.
          </Paragraph>
          <div className={`rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
            <MetaItem icon={FiClock} label="Duration" value="4 months" />
            <MetaItem icon={FiUsers} label="Team Size" value="4 Designers" />
            <MetaItem icon={FiBriefcase} label="Role" value="Sr. UX Designer" />
            <MetaItem icon={FiTool} label="Tools" value="Adobe XD, MS Excel" />
          </div>
        </Section>

        {/* Pain Points */}
        <Section>
          <Subtitle>Pain Points</Subtitle>
          <div className="space-y-5">
            <Section>
              <SubSubtitle>Lack of Prioritization</SubSubtitle>
              <Paragraph>
                Teachers struggled to quickly identify their most urgent tasks. The dashboard offered no visual cues for impending deadlines or overdue items.
              </Paragraph>
            </Section>
            <Section>
              <SubSubtitle>Inefficient Workflow</SubSubtitle>
              <Paragraph>
                To check for new submissions, pending grades, or upcoming assignments, teachers had to navigate deeply into individual courses or class pages, consuming valuable time.
              </Paragraph>
            </Section>
            <Section>
              <SubSubtitle>Limited Insight</SubSubtitle>
              <Paragraph>
                The dashboard provided no proactive insights into student engagement, common areas of difficulty, or trends in their teaching activities.
              </Paragraph>
            </Section>
            <Section>
              <SubSubtitle>Missed Opportunities</SubSubtitle>
              <Paragraph>
                Teachers occasionally missed grading deadlines or forgot to assign necessary materials due to the absence of a central, actionable reminder system.
              </Paragraph>
            </Section>
          </div>
        </Section>

        {/* Solution */}
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
              <ListItem title="Personalization" description="The dashboard should adapt to the individual teacher's current workload and priorities." />
              <ListItem title="Clarity & Simplicity" description="Information should be presented clearly and concisely, minimizing cognitive load." />
              <ListItem title="Consistency" description="Maintain a consistent design language across the entire LMS." />
            </BulletList>
          </Paragraph>
        </Section>

        {/* Key Features */}
        <Section>
          <Subtitle>Key Features</Subtitle>
          <Paragraph>
            The new dashboard presents a significantly more organized, actionable, and insightful view for teachers, addressing the previously identified pain points.
          </Paragraph>

          <div className="space-y-6 sm:space-y-8">
            <Section>
              <SubSubtitle>Personalized Welcome &amp; "Pick up where you left off"</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem title="Purpose" description='Provides a personal touch and quick access to recent work.' />
                  <ListItem title="Design" description='A "Pick up where you left off" section with a "Resume" button directly links to the last active course.' />
                  <ListItem title="Benefit" description="Enhances user experience and reduces friction for continuing work." />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>Tabbed Navigation for "Courses" and "Grading"</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem title="Purpose" description="Clearly separates and organizes core teacher workflows." />
                  <ListItem title="Design" description={`Two distinct tabs: "Courses" and "Grading."`} />
                  <ListItem title="Benefit" description="Improves information architecture and allows teachers to focus on specific task categories." />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>"Recently Taught Classes" / "My Active Classes" Section</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem title="Purpose" description="Provides quick access to the classes the teacher is currently most engaged with or has recently interacted with." />
                  <ListItem title="Design" description={`A grid of more visually engaging course cards. Each card now explicitly shows "Progress" and "Performance" bars, along with "View" or "Launch" buttons. The previous generic icons are replaced with more direct actions.`} />
                  <ListItem title="Benefit" description="Reduces navigation time for frequent tasks and provides a snapshot of class status." />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>"Items for Grading" Module</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem title="Purpose" description="Centralizes all pending grading tasks from across all assigned courses and classes." />
                  <ListItem title="Design" description={`A dedicated "Grading" tab transforms the main content area into a list of assignments featuring: an "All Courses" dropdown for filtering, a "Show only overdue submissions" checkbox for quick prioritization, filters by Classes and Subject, and a clear list showing Assignment Name, Course Name, Grade, Due Date, and a direct link icon to the grading interface.`} />
                  <ListItem title="Benefit" description="Prevents missed grading, improves turnaround times, and provides a clear, filterable grading queue." />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>Calendar Module</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem title="Purpose" description="Provides a visual overview of all important dates related to the teacher's schedule. Proactively reminds teachers about upcoming assignments and flags overdue assignments." />
                  <ListItem title="Design" description={`A prominent interactive calendar widget on the right sidebar. Dates with activities are highlighted. Below the calendar, "Due on Friday, 5-Oct-2024" lists specific assignments and their associated action icons.`} />
                  <ListItem title="Benefit" description="Offers a holistic view of the teacher's schedule, ensures timely assignment publishing and helps teachers follow up on student submissions." />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>"Notifications" Section</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem title="Purpose" description="Provides real-time alerts and updates." />
                  <ListItem title="Design" description='A dedicated "Notifications" stream below the calendar, displaying messages with timestamps and actionable links.' />
                  <ListItem title="Benefit" description="Keeps teachers informed without them having to actively seek out information." />
                </BulletList>
              </Paragraph>
            </Section>
          </div>
        </Section>

        {/* Implementation Strategy */}
        <Section>
          <Subtitle>Implementation Strategy</Subtitle>
          <Paragraph>
            <ol className="list-decimal pl-5 space-y-3">
              <li><span className="font-semibold">User Research & Prototyping:</span> Extensive user research, wireframing, and interactive prototyping were used to validate design concepts and gather early feedback. The visual evidence of a much cleaner and organized UI suggests a strong user-centric design approach.</li>
              <li><span className="font-semibold">Agile Development:</span> The development team utilized an agile methodology, allowing for iterative improvements based on user feedback.</li>
              <li><span className="font-semibold">Data Integration:</span> Complex backend integrations were required to pull data from various modules (assignments, grades, calendar, student activity) into a unified dashboard view, evident in the "Progress" and "Performance" indicators on course cards and the detailed grading list.</li>
            </ol>
          </Paragraph>
        </Section>

        {/* Designs */}
        <Section>
          <Subtitle>Designs</Subtitle>

          <Section>
            <SubSubtitle>Low-fidelity Wireframe (Version 1)</SubSubtitle>
            <ImageFrame src="/images/teacher-dashboard/lofi-v1.png" alt="Low-fidelity wireframe version 1" />
          </Section>

          <Section>
            <SubSubtitle>Low-fidelity Wireframe (Version 2)</SubSubtitle>
            <ImageFrame src="/images/teacher-dashboard/lofi-v2.png" alt="Low-fidelity wireframe version 2" />
          </Section>

          <Section>
            <SubSubtitle>High-fidelity Wireframe (Version 1)</SubSubtitle>
            <ImageFrame src="/images/teacher-dashboard/hifi-v1.png" alt="High-fidelity wireframe version 1" />
          </Section>

          <Section>
            <SubSubtitle>High-fidelity Wireframe (Version 2)</SubSubtitle>
            <ImageFrame src="/images/teacher-dashboard/hifi-v2.png" alt="High-fidelity wireframe version 2" />
          </Section>

          <Section>
            <SubSubtitle>Final Designs</SubSubtitle>
            <ImageFrame src="/images/teacher-dashboard/final-v1.png" alt="Final designs 1" />
            <ImageFrame src="/images/teacher-dashboard/final-v2.png" alt="Final designs 2" />
          </Section>
        </Section>

        {/* Outcomes and Impact */}
        <Section>
          <Subtitle>Outcomes and Impact</Subtitle>
          <div className="space-y-5">
            <Section>
              <SubSubtitle>Reduced Navigation Time</SubSubtitle>
              <Paragraph>
                The direct "View" or "Launch" buttons on course cards, the consolidated "Grading" tab, and the integrated calendar significantly reduce the number of clicks and mental effort required to find relevant tasks.
              </Paragraph>
            </Section>
            <Section>
              <SubSubtitle>Faster Grading Turnaround</SubSubtitle>
              <Paragraph>
                The dedicated "Grading" tab with filtering options and an "overdue submissions" filter directly addresses the need for efficient grading management.
              </Paragraph>
            </Section>
            <Section>
              <SubSubtitle>Improved Teacher Satisfaction</SubSubtitle>
              <Paragraph>
                The cleaner, more modern interface, the personalized welcome, and the actionable information would naturally lead to higher teacher satisfaction. Teachers likely feel more organized and in control.
              </Paragraph>
            </Section>
            <Section>
              <SubSubtitle>Future-Proofing</SubSubtitle>
              <Paragraph>
                The modular design, with clear sections for Courses, Grading, and a dynamic sidebar, allows for easy addition of new features and insights in the future (e.g., student performance trends, personalized nudges).
              </Paragraph>
            </Section>
          </div>
        </Section>

        {/* Insights */}
        <Section>
          <Subtitle>Insights</Subtitle>
          <Paragraph>
            <BulletList>
              <ListItem description="Involving teachers throughout the design process was crucial to creating a truly useful and adopted solution. The visible improvements strongly suggest this was a priority." />
              <ListItem description="The success of an insights-driven dashboard heavily relies on robust and reliable data integration from various system modules, which is evident in the dynamic data displayed." />
              <ListItem description="A phased rollout and agile development approach allowed for continuous improvement and mitigated risk." />
              <ListItem description="A well-designed product needs effective communication and training to ensure user adoption." />
            </BulletList>
          </Paragraph>
        </Section>

      </CaseStudyContainer>
    </ThemeContext.Provider>
  )
}
