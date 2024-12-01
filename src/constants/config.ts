type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Systems Architect',
    fullName: 'Sidhanth Satish',
    email: 'sidhanth@techahead.ca',
  },
  hero: {
    name: 'Sidhanth Satish',
    p: ['I Develop Web Applications, Mobile Apps and Cloud Services'],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I am a systems architect who has developed applications such as
      Content Management Systems (CMS) with Registration, and College software
      solutions including Student Information Systems (SIS), Learning Management
      Systems (LMS), Customer Relationship Management (CRM), Finance, and HR modules.
      Additionally, I have developed a resume generator and enhanced cloud services
      across multiple sectors. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `This collection of projects illustrates my proficiency and background through
    practical examples. Each project is briefly described and accompanied by
    links to live demos. This demonstration showcases my
    ability to solve complex problems, apply various technologies,
    and manage projects efficiently.`,
    },
  },
};
