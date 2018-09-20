# focus

Track focus. Move seamlessly between the goals of your life, and keeping your mind only on the context necessary to you at that point.

## Features

### Define
* long-term priorities,
* attentional stack

### Record
* Immediate breaches
* Future intentions
   * Classified according to Getting Things Done-style 1) purpose 2) outcome vision 3) brainstorm 4) organize 5) next steps

### Review
* Thoughts and intentions over time

### Focus
* Track which goals you're focusing on at any point in time

## Thoughts

### Introspection

* Which tasks can you use music to help? (Executional vs analysis)
* How do you decide between priorities at a moment in time?
   * Utilize different emotional states for different activities
      * E.g. Sad, lonely, happy, energized, thoughtful
   * Use different days or habits to fit priorities together

### Exposition

* Expose to your friends what your emotional state is and how your goals can fit together
   * Find people with similar issues
   * Find people with similar emotional states

## Technical Roadmap

* Create SVG React Components to represent nodes etc - linkable?
* Create basic component that does graphql query for the data
   * Create links with actions
      * Feeling (emoji -> stuck, happy, sad, overwhelmed)
      * Thought (what? recorded at current timestamp)
      * Intention (what? when? (today / soon / someday))

### Node Types

* Inputs
* Outputs
* Node
   * Health
      * Quantitative (0:100%) [User setting custom scale factors, 0:32, -100:100]
      * Qualitative
      * Osmotic (speed of absorbtion, calcuation (sum child roots))
   * Thoughts
      * Ideas/notes over time
   * Intentions
      * Ideas/notes over time
* Sun & soil - external factors in growth/mood to watch out for

* Views
   * Tree (high-level: purpose-outcome-brainstorm)
   * Branch (brainstorm-organize-next steps)

## Getting This Done

1. Purpose
   * Make tracking my entire life of goals and projects pleasant, exhaustive, extensible and tractable
1. Outcome visioning
   * Have somewhere to update progress/ideas/organize/next steps for projects and subprojects
   * Maintain a vision of how goals relate to each other
1. Brainstorming
   * Start designing tree / branch views
   * Start working out how tree and branch interact
1. Organize
1. Next Steps
   * Start coding