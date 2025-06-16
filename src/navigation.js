import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Ecosoft',
      links: [
        // {
        //   text: 'Why Odoo',
        //   href: getPermalink('/#why_odoo'),
        // },
        {
          text: 'Our Approach',
          href: getPermalink('/#our_approach'),
        },
        {
          text: 'Customers',
          href: getPermalink('/#customer_ref'),
        },
        {
          text: 'Services',
          href: getPermalink('/#solution-1'),
        },
        {
          text: 'Latest Blog',
          href: getPermalink('/#new_post'),
        },
        // {
        //   text: 'Partners',
        //   href: getPermalink('/#partners'),
        // },
      ]
    },
    {
      text: 'Services',
      links: [
        {
          text: 'ERP',
          href: getPermalink('/#solution-1'),
        },
        {
          text: 'Government ERP (Odoo)',
          href: getPermalink('/#solution-2'),
        },
        {
          text: 'Digital Dashboard',
          href: getPermalink('/#solution-3'),
        },
        {
          text: 'Automation / API',
          href: getPermalink('/#solution-4'),
        },
        {
          text: 'Others',
          href: getPermalink('/#solution-5'),
        },
      ]
    },
    {
      text: 'Blogs',
      href: getPermalink('/blog'),
    },
    {
      text: 'Job Opening',
      links: [
        {
          text: 'ERP Accounting Functional Consultant',
          href: 'https://ecosoft.frappe.cloud/erp-accounting-functional-consultant'
        },
        {
          text: 'Software Developer (Odoo)',
          href: 'https://ecosoft.frappe.cloud/software-developer-odoo'
        },
        {
          text: 'Software Developer (ERPNext)',
          href: 'https://ecosoft.frappe.cloud/software-developer-erpnext'
        }
      ]
    },
  ],
  actions: [{ type: 'button', text: 'Contact Us', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Main',
      links: [
        {
          text: 'Home',
          href: getPermalink('/'),
        },
        {
          text: 'Ecosoft',
          href: getPermalink('/#ecosoft'),
        },
        {
          text: 'Our Approach',
          href: getPermalink('/#our_approach'),
        },
        // {
        //   text: 'Why Odoo',
        //   href: getPermalink('/#why_odoo'),
        // },
        {
          text: 'Customers',
          href: getPermalink('/#customer_ref'),
        },
      ],
    },
    {
      title: 'Services',
      links: [
        {
          text: 'ERP',
          href: getPermalink('/#solution-1'),
        },
        {
          text: 'Government ERP (Odoo)',
          href: getPermalink('/#solution-2'),
        },
        {
          text: 'Digital Dashboard',
          href: getPermalink('/#solution-3'),
        },
        {
          text: 'Automation / API',
          href: getPermalink('/#solution-4'),
        },
        {
          text: 'Others',
          href: getPermalink('/#solution-5'),
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          text: 'Blogs',
          href: getPermalink('/blog'),
        },
        {
          text: 'Contact Us',
          href: 'https://ecosoft.frappe.cloud/contact-us',
        }
      ]
    }
  ],
  summary: `<b>Address:</b><br/>459/132 Suksawat Rd. Ratchaburana<br/>
    Bangkok Thailand 10140<br/>
    <b>Phone:</b> +66 81 841 7480<br/>
    <b>Email:</b> sales@ecosoft.co.th
  `,
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
