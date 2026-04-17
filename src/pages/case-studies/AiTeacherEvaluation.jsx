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

function StatCard({ value, label, accent }) {
  const isDark = useContext(ThemeContext)
  return (
    <div className={`rounded-2xl px-6 py-5 flex flex-col items-center gap-2 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <span className={`text-4xl sm:text-5xl font-bold ${accent}`}>{value}</span>
      <span className={`text-xs sm:text-sm text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</span>
    </div>
  )
}

export default function AiTeacherEvaluationCaseStudy({ isDark }) {
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
            Integrating AI in Teacher Evaluation in LMS
          </h1>
        </div>

        {/* Overview */}
        <Section>
          <Paragraph>
            This project outlines the user experience design for an AI-powered teacher evaluation feature within a grade submission platform. The goal is to assist teachers in efficiently grading essay-type questions using artificial intelligence while providing them with control and transparency over the evaluation process.
          </Paragraph>
          <div className={`rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
            <MetaItem icon={FiClock} label="Duration" value="4 months" />
            <MetaItem icon={FiUsers} label="Team Size" value="4 Designers" />
            <MetaItem icon={FiBriefcase} label="Role" value="Sr. UX Designer" />
            <MetaItem icon={FiTool} label="Tools" value="Adobe XD, MS Excel" />
          </div>
        </Section>

        {/* Problem Statement */}
        <Section>
          <Subtitle>Problem Statement</Subtitle>
          <Paragraph>
            Teachers face significant time constraints when grading essay-type questions, leading to potential delays in providing feedback to students and increasing workload. Manual evaluation can also introduce inconsistencies in grading across different students or questions.
          </Paragraph>
        </Section>

        {/* User Journey Mapping */}
        <Section>
          <Subtitle>User Journey Mapping</Subtitle>
          <Paragraph>
            We mapped the complete teacher evaluation journey from quiz selection to final grade submission, identifying key decision points and potential friction areas.
          </Paragraph>
          <SubSubtitle>Critical User Needs:</SubSubtitle>
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

        {/* Solution */}
        <Section>
          <Subtitle>Solution</Subtitle>

          <div className="space-y-6 sm:space-y-8">
            <Section>
              <SubSubtitle>Evaluation Dashboard</SubSubtitle>
              <Paragraph>
                <p className="mb-2"><span className="font-semibold">Problem:</span> Teachers needed a clear overview of pending evaluations across multiple courses and quizzes.</p>
                <p className="mb-2"><span className="font-semibold">Solution:</span> A filterable dashboard with two evaluation approaches:</p>
                <BulletList>
                  <ListItem description="Mandatory filters (Class, Course, Course Quiz) to prevent overwhelming data display" />
                  <ListItem description="Clear metrics showing submission counts and pending evaluations" />
                  <ListItem description="Toggle between question-focused and student-focused workflows" />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>AI Evaluator Selection</SubSubtitle>
              <Paragraph>
                <p className="mb-2"><span className="font-semibold">Problem:</span> Different questions and contexts require varying evaluation strictness.</p>
                <p className="mb-2"><span className="font-semibold">Solution:</span> Three-tier evaluator system:</p>
                <BulletList>
                  <ListItem description="Lenient Evaluator — More forgiving scoring approach" />
                  <ListItem description="Moderate Evaluator — Balanced evaluation" />
                  <ListItem description="Strict Evaluator — Rigorous scoring standards" />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>Smart Scoring Interface</SubSubtitle>
              <Paragraph>
                <p className="mb-2"><span className="font-semibold">Problem:</span> Teachers needed to understand and potentially modify AI scoring decisions.</p>
                <p className="mb-2"><span className="font-semibold">Solution:</span> Rubric-based evaluation display with:</p>
                <BulletList>
                  <ListItem description="Visual indicators showing AI vs. teacher selections" />
                  <ListItem description="Expandable reasoning for each scoring decision" />
                  <ListItem description="One-click rating modifications with optional teacher explanations" />
                  <ListItem description="Reset functionality to revert to AI scoring" />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>Comprehensive Review System</SubSubtitle>
              <Paragraph>
                <p className="mb-2"><span className="font-semibold">Problem:</span> Teachers wanted holistic evaluation including content and grammar assessment.</p>
                <p className="mb-2"><span className="font-semibold">Solution:</span> Three-tab evaluation system:</p>
                <BulletList>
                  <ListItem description="Smart Scoring — Rubric-based content evaluation" />
                  <ListItem description="Exemplar Responses — Reference materials for consistent grading" />
                  <ListItem description="Grammar Check — Automated grammar error detection with manual override" />
                </BulletList>
              </Paragraph>
            </Section>
          </div>
        </Section>

        {/* Key Features */}
        <Section>
          <Subtitle>Key Features</Subtitle>

          <div className="space-y-6 sm:space-y-8">
            <Section>
              <SubSubtitle>1. Evaluation Flow</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem title="Filter Selection" description="Teachers select class, course, and quiz" />
                  <ListItem title="Question/Student Selection" description="Choose evaluation approach" />
                  <ListItem title="AI Evaluator Selection" description="Select appropriate strictness level" />
                  <ListItem title="Review & Modify" description="Examine AI scoring with modification options" />
                  <ListItem title="Submit & Proceed" description="Finalize evaluation and move to next item" />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>2. Flexibility &amp; Control</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem title="Modification Rights" description="Teachers can override any AI decision" />
                  <ListItem title="Explanation System" description="Optional teacher explanations improve AI learning" />
                  <ListItem title="Reset Options" description="Easy reversion to AI recommendations" />
                  <ListItem title="Re-evaluation" description="Complete re-assessment with different evaluators" />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>3. Progress Management</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem title="Auto-save" description="Modifications preserved without submission" />
                  <ListItem title="Batch Completion" description="Clear indicators when evaluation sets are complete" />
                  <ListItem title="Navigation Options" description="Smooth transitions between questions/students" />
                </BulletList>
              </Paragraph>
            </Section>
          </div>
        </Section>

        {/* Design Decisions */}
        <Section>
          <Subtitle>Design Decisions</Subtitle>

          <div className="space-y-5">
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
                  <ListItem description='Expandable sections to manage cognitive load' />
                  <ListItem description='"Hide/Show Scoring Reasons" toggle for focus control' />
                  <ListItem description="Card-based layout for easy scanning and selection" />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>Feedback Systems</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem description="Immediate visual feedback for all interactions" />
                  <ListItem description="Progress indicators for evaluation completion" />
                  <ListItem description="Clear success states for submitted evaluations" />
                </BulletList>
              </Paragraph>
            </Section>
          </div>
        </Section>

        {/* Interaction Patterns */}
        <Section>
          <Subtitle>Interaction Patterns</Subtitle>

          <div className="space-y-5">
            <Section>
              <SubSubtitle>Progressive Enhancement</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem description="Start with AI evaluation, allow human refinement" />
                  <ListItem description="Optional teacher explanations don't block workflow" />
                  <ListItem description="Grammar check available but not mandatory" />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>Consistency Maintenance</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem description="Same evaluator must be used for all students on a question" />
                  <ListItem description="Rubric-based scoring ensures standardized evaluation" />
                  <ListItem description="Clear guidelines and examples for evaluator selection" />
                </BulletList>
              </Paragraph>
            </Section>
          </div>
        </Section>

        {/* Designs */}
        <Section>
          <Subtitle>Designs</Subtitle>

          <Section>
            <SubSubtitle>Teacher Evaluation Page</SubSubtitle>
            <ImageFrame src='/images/ai-teacher-evaluation/screen-1.png' alt='Teacher Evaluation Page'/>
          </Section>

          <Section>
            <SubSubtitle>Selecting AI for Evaluation</SubSubtitle>
            <ImageFrame src='/images/ai-teacher-evaluation/screen-2.png' alt='Selecting AI for Evaluation'/>
          </Section>

          <Section>
            <SubSubtitle>AI Evaluation in Progress</SubSubtitle>
            <ImageFrame src='/images/ai-teacher-evaluation/screen-3.png' alt='AI Evaluation in Progress'/>
          </Section>

          <Section>
            <SubSubtitle>AI Evaluation</SubSubtitle>
            <ImageFrame src='/images/ai-teacher-evaluation/screen-4.png' alt='AI Evaluation'/>
          </Section>
        </Section>

        {/* Conclusion & Insights */}
        <Section>
          <Subtitle>Conclusion &amp; Insights</Subtitle>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <StatCard value="91%" label="Teacher satisfaction rate with the evaluation system" accent="text-green-500" />
            <StatCard value="89%" label="Teachers successfully evaluated without assistance" accent="text-green-500" />
          </div>

          <Paragraph>
            <BulletList>
              <ListItem description="Prioritizing transparency, flexibility, and teacher agency, we created a tool that enhances rather than replaces human judgment in educational assessment." />
              <ListItem description="The key to success was treating AI as an intelligent assistant rather than a replacement, allowing teachers to maintain their essential role while dramatically reducing administrative burden." />
            </BulletList>
          </Paragraph>
        </Section>

        {/* Improvements */}
        <Section>
          <Subtitle>Improvements</Subtitle>

          <div className="space-y-5">
            <Section>
              <SubSubtitle>Areas for Improvement</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem title="Mobile experience" description="Teachers requested tablet optimized interfaces for grading flexibility" />
                  <ListItem title="Batch operations" description="Some teachers wanted to apply decisions across multiple similar responses" />
                  <ListItem title="Analytics dashboard" description="Teachers expressed interest in grading pattern insights" />
                </BulletList>
              </Paragraph>
            </Section>

            <Section>
              <SubSubtitle>Future Opportunities</SubSubtitle>
              <Paragraph>
                <BulletList>
                  <ListItem description="Integration with learning management systems" />
                  <ListItem description="Predictive grading suggestions based on teacher patterns" />
                  <ListItem description="Collaborative grading features for team-taught courses" />
                  <ListItem description="Student self-assessment tools using similar AI evaluation" />
                </BulletList>
              </Paragraph>
            </Section>
          </div>
        </Section>

      </CaseStudyContainer>
    </ThemeContext.Provider>
  )
}
