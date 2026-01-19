'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Hospital Administrator',
    facility: 'Metropolitan Medical Center',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    content: 'ShifaCom has transformed how we manage patient data. The HIPAA compliance features give us confidence that we\'re protecting our patients\' information while improving our workflow.',
    rating: 5,
  },
  {
    name: 'Dr. Ahmed Hassan',
    role: 'Clinical Director',
    facility: 'Central Clinic Group',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    content: 'The real-time synchronization across departments has reduced our appointment errors by 80%. It\'s like having a dedicated IT team managing our entire healthcare operation.',
    rating: 5,
  },
  {
    name: 'Michelle Chen',
    role: 'Pharmacy Manager',
    facility: 'Sunrise Pharmacy Network',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    content: 'The pharmacy module is incredibly intuitive. We\'ve cut our inventory management time in half, and our compliance audits have never been smoother. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Dr. Robert Williams',
    role: 'Medical Director',
    facility: 'State Health Services',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    content: 'The support team is exceptional. Every feature we needed, they helped us implement. ShifaCom isn\'t just software; it\'s a partner in our healthcare mission.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what healthcare professionals are saying about ShifaCom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 text-lg leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.facility}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
