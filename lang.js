var arrLang = {
    'en' : {
        'nav1' : 'Home',
        'nav2' : 'About',
        'nav3' : 'Projects',
        'nav4' : 'Masterclasses',
        'nav5' : 'Contact',

        'lander1' : 'Master yourself with us.',
        'lander2' : 'Find a Masterclass',
        'lander3' : 'Projects',

        'about1' : 'About Us',
        'about2' : 'We are an innovative network using proven methods to bring modern and contemporary knowledge to businesses, professionals and education. Our aim is to introduce useful tools and new ways of thinking into existing establishments in order to increase efficiency and quality of work.',
        'about3' : 'Contact Us',

        'partners1' : 'Our Partners',

        'projects1' : 'Our Projects',
        'projectsDetails' : 'View Details',
        'projects2' : 'Project X',
        'projects3' : 'Project Y by X',
        'projects4' : 'Big Data Project',
        'projects5' : 'Blockchain Expert',

        'purpose1' : 'What We Do',
        'purpose2' : 'We offer a variety of different courses starting from mid 2020 so that you can learn in a way best suited to you and to your schedule. Courses are ranked beginner, intermediate and advanced. Some courses will recommend some material to go through before attending. Please view specific event pages to find the extra material.All courses will include an opportunity for coffee and networking with fellow participants and speakers.',
        'purpose3' : '+ LECTURES',
        'purpose4' : '+ SEMINARS',
        'purpose5' : '+ WORKSHOPS',
        'purpose6' : 'Lectures',
        'purpose7' : 'Experts on the subjects from around the globe give talks on their areas of expertise. Each talk will also host a question and answer space for you to pick the guest speakers’ brains and ask any question you might still be unsure about. Lectures and seminars will be given as one off events and as a chain of events too. Talks vary from general introductions of a new technology to specific innovative uses and applications of that technology.',
        'purpose8' : 'Seminars',
        'purpose9' : 'A series of intense, focused meetings lead by an expert in which you can gain in-depth and exclusive knowledge about a specific new technology, it’s applications and how it will shape the future.',
        'purpose10' : 'Workshops',
        'purpose11' : 'Together, students and the workshop leader will come up with ways to use new technologies to solve your business problems. These work best with masterclasses.',
        
        'team1' : 'The Team',
        'team2' : 'Chairman',
        'team3' : 'CTO',
        'team4' : 'VP',

        'footer1' : 'Phone',
        'footer2' : 'Email',
        'footer3' : 'Address',
        'footer4' : 'Social',
        'footerX5' : 'HOME',
        'footerX6' : 'ABOUT',
        'footerX7' : 'PROJECTS',
        'footerX8' : 'MASTERCLASSES',
        'footerX9' : 'CONTACT',

        //Contact Page
        'contact1' : 'Contact Us',
        'contact2' : "Whether you're a business wanting to get involved or ask a question, or you simply want to get to know us better, please contact us, we're always happy to discuss!",
        'contact3' : 'Send Us a Message',
        'contactX4' : 'First Name *',
        'contactX5' : 'Surname *',
        'contactX6' : 'Email *',
        'contactX7' : 'Company Name',
        'contactX8' : 'How can we help you? *',
        'contact9' : 'Send Message',
    },

    'bn': {
        'nav1' : 'বাড়ি',
        'nav2' : 'সম্পর্কিত',
        'nav3' : 'প্রকল্প',
        'nav4' : 'Masterclasses',
        'nav5' : 'যোগাযোগ',

        'lander1' : 'আমাদের সাথে নিজেকে আয়ত্ত করুন।',
        'lander2' : 'ওহে বন্ধু',
        'lander3' : 'ওহে ',

        'about1' : 'আমাদের সম্পর্কে',
        'about2' : 'আমরা ব্যবসা, পেশাদার এবং শিক্ষায় আধুনিক ও সমসাময়িক জ্ঞান আনতে প্রমাণিত পদ্ধতি ব্যবহার করে একটি উদ্ভাবনী নেটওয়ার্ক। আমাদের লক্ষ্য হল দরকারী সংস্থাগুলি এবং কার্যকারিতা এবং কাজের গুণমান বাড়ানোর জন্য বিদ্যমান প্রতিষ্ঠানে নতুন চিন্তাভাবনার নতুন উপায় প্রবর্তন করা।',
        'about3' : 'যোগাযোগ করুন',

        'partners1' : 'Lipsum',

        'footerX5' : 'বাড়ি',
        'footerX6' : 'সম্পর্কিত',
        'footerX7' : 'প্রকল্প',
        'footerX8' : 'MASTERCLASSES',
        'footerX9' : 'যোগাযোগ',
    }
};

var elements = document.getElementsByClassName("lang-btn");
var prevLang;

var clickFunction = function() {
    var lang = $(this).attr('id');

    if($('<link href='+prevLang+'.css" rel="stylesheet"/>')){
        $('link[href="'+prevLang+'.css"]').remove();
    }
    if(lang != "en"){
        $('<link href="'+lang+'.css" rel="stylesheet"/>').appendTo('head');
    }
    
    $('.lang').each(function(index, item) {
        if($(this).attr('key').includes("contactX")){
            $(this).attr('placeholder', arrLang[lang][$(this).attr('key')]); 
        }
        else{ 
            $(this).text(arrLang[lang][$(this).attr('key')]);//[$(this).attr('key')]);
            if($(this).attr('key').includes("footerX")){
                $(this).attr('data-text', arrLang[lang][$(this).attr('key')]); 
            }
        }

        
        
    });
    prevLang = lang;
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', clickFunction, false);
}
