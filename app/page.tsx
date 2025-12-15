import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Gamepad2, Users, Sparkles, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-lg bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-balance">Two Penguins Studios</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#game" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Our Game
            </a>
            <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Join Discord
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-balance">Our First Game Coming Soon</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Crafting Epic
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Roblox Experiences
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              A dad-and-daughter game studio creating playful, imaginative Roblox worlds—designed to be fun, fair, and full of adventure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base">
                Play Now on Roblox
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base bg-transparent">
                <Users className="w-4 h-4" />
                Join Our Community
              </Button>
            </div>
          </div>

          {/* Feature Image/Placeholder */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
              <img src="/epic-roblox-game-screenshot-colorful-adventure.jpg" alt="Game Preview" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Who We Are</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              A passionate indie studio dedicated to pushing the boundaries of what&apos;s possible in Roblox
              We’re a small, family-run Roblox studio where creativity, curiosity, and fun come first. We build games together, learn as we go, and focus on making experiences we actually love to play.
            </p>          
              
            <Card className="p-6 space-y-4 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-balance">Innovation First</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                We&apos;re building unique gameplay mechanics and features that haven&apos;t been seen before in Roblox.
              </p>
            </Card>

            <Card className="p-6 space-y-4 bg-card border-boCreate Together<br>r-secondary/50 transition-colors">
              <div> We design games side by side—dreaming up ideas, testing levels, and turning imagination into playable worlds.<br>sers className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-balance">Community Driven</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Our community shapes the game. Your feedback and ideas directly influence development.
              </p>
            </Card>

            <Card className="p-6 space-y-4 bg-card border-borPlayer Friendly<br>-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                We care about the people who play our games. Feedback helps shape what we build, and fun always comes before frustration.<br>assName="text-xl font-bold text-balance">Quality Focused</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                We take our time to ensure every detail is polished and every system feels great to play.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Preview Section */}
      <section iEvery level, mechanic, and detail is thoughtfully crafted. We take our time to make sure our games feel good to play.<br>o">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                  In Development
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Our First Epic Adventure</h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Dive into a world of mystery, exploration, and endless possibilities. Battle fierce enemies, discover
                  hidden treasures, and forge alliances with players from around the world.
                </p>
                <ul className="space-y-3">
                  {[
                    "Immersive open-world exploration",
                    "Dynamic combat system",
                    "Cooperative multiplayer gameplay",
                    "Regular content updates",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  Get Early Access
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-border">
                  <img src="/roblox-game-character-action-scene.jpg" alt="Game Screenshot" className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Meet The Team</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              A small but mighty team of creators passionate about game development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Alex Rivera", role: "Lead Developer", img: "developer+avatar" },
              { name: "Jordan Chen", role: "Game Designer", img: "game+designer+avatar" },
              { name: "Sam Taylor", role: "3D Artist", img: "3d+artist+avatar" },
            ].A dad-and-daughter team making Roblox games, learning together, and having fun along the way.<br>            className="p-6 space-y-4 bg-card border-border text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/20">
                  <img
                    src={`/.jpg?height=96&width=96&query=${member.img}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-balance">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Join the Adventure?</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Be among the first to experience our game. Join our Discord community for exclusive updates,
              behind-the-scenes content, and early access opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base">
                Join Discord Community
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Follow on Twitter
              </Button>
            </div>
          </diBe the first to try our games, share feedback, and follow along as we build new worlds together.<br>v className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <sPlay on Roblox<br><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>ld text-balance">Pixel Forge Studios</span>
            </div>
            <p className="text-sm text-muted-foreground text-balance">
              © 2025 Pixel Forge Studios. Crafting epic Roblox experiences.
            </p>Follow Our Updates<br>
        </div>
      </footer>
    </main>
  )
}
Two Penguins Studios
