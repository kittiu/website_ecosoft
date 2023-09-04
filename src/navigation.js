import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'Ecosoft',
          href: getPermalink('/#ecosoft'),
        },
        {
          text: 'Technology Partners',
          href: getPermalink('/#technology_partner'),
        },
        {
          text: 'Why Odoo?',
          href: getPermalink('/#why_odoo'),
        },
        {
          text: 'Customer References',
          href: getPermalink('/#customer_ref'),
        },
        {
          text: 'Our Approach',
          href: getPermalink('/#our_approach'),
        },
        {
          text: 'Our Solutions',
          href: getPermalink('/#solution-1'),
        },
      ],
    },
    {
      text: 'Solutions',
      links: [
        {
          text: 'Enterprise Resources Planning (Odoo)',
          href: getPermalink('/solutions/erp'),
        },
        {
          text: 'Government Procurement/Budgeting (Odoo)',
          href: getPermalink('/solutions/egov'),
        },
        {
          text: 'e-Tax / e-Receipt / e-Signature',
          href: getPermalink('/solutions/etax'),
        },
        {
          text: 'Process Automation / API',
          href: getPermalink('/solutions/api'),
        },
        {
          text: 'Tailer Made Solutions',
          href: getPermalink('/solutions/others'),
        },
      ],
    },
    {
      text: 'FAQ',
      href: getPermalink('/faq'),
    },
    {
      text: 'Blogs',
      href: getPermalink('/blog'),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }],
};

export const footerData = {
  links: [
    {
      title: 'Homes',
      links: [
        {
          text: 'Ecosoft',
          href: getPermalink('/#ecosoft'),
        },
        {
          text: 'Technology Partners',
          href: getPermalink('/#technology_partner'),
        },
        {
          text: 'Why Odoo?',
          href: getPermalink('/#why_odoo'),
        },
        {
          text: 'Customer References',
          href: getPermalink('/#customer_ref'),
        },
        {
          text: 'Our Approach',
          href: getPermalink('/#our_approach'),
        },
        {
          text: 'Our Solutions',
          href: getPermalink('/#solution-1'),
        },
      ],
    },
    {
      title: 'Solutions',
      links: [
        {
          text: 'Enterprise Resources Planning (Odoo)',
          href: getPermalink('/solutions/erp'),
        },
        {
          text: 'Government Procurement/Budgeting (Odoo)',
          href: getPermalink('/solutions/egov'),
        },
        {
          text: 'e-Tax / e-Receipt / e-Signature',
          href: getPermalink('/solutions/etax'),
        },
        {
          text: 'Process Automation / API',
          href: getPermalink('/solutions/api'),
        },
        {
          text: 'Tailer Made Solutions',
          href: getPermalink('/solutions/others'),
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          text: 'FAQ',
          href: getPermalink('/faq'),
        },
        {
          text: 'Blogs',
          href: getPermalink('/blog'),
        },
        {
          text: 'Contact Us',
          href: getPermalink('/contact'),
        }
      ]
    }
  ],
  summary: `Openness - Quality - Simplicity is our core values<br/>
    ความสำเร็จของงานเราจึงเกิดจากการผสานกันของซอฟต์แวร์แบบโอเพ่นซอร์ส 100%
    และการให้คำปรึกษาทางธุรกิจอย่างถูกต้องและตรงไปตรงมา
  `,
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Ecosoft OCA Modules', icon: 'tabler:brand-open-source', href: 'https://odoo-community.org/shop?search=ecosoft' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ecosoft-odoo' },
    { ariaLabel: 'Blogger', icon: 'tabler:brand-blogger', href: 'https://ecosoft-odoo.blogspot.com/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(/images/ecosoft_short.png)]"></span>
    © Copyright Ecosoft | All Rights Reserved
  `,
};
