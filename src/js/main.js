const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const skillsContent = document.querySelector('#skills-content');
const contactContent = document.querySelector('#contact-content');

const yearsOfExperience = document.querySelector('#yearsOfExperience');
yearsOfExperience.innerHTML = new Date(Date.now()).getFullYear() - new Date("2010/01/01").getFullYear();

const terminalColor = getComputedStyle(document.documentElement).getPropertyValue('--terminal-color');
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

let aboutBox;
about.addEventListener('click', () => {
    
    if (aboutBox) {
        aboutBox.focus();
        aboutBox.minimize(false);
        return;
    }

    const defaultWidth = 500;
    const defaultHeight = 600;

    aboutBox = new WinBox({
        title: 'About Me',
        width: vw < defaultWidth ? vw : defaultWidth,
        height: vw < defaultWidth ? vh : defaultHeight,
        x: vw < defaultWidth ? 0 : 50,
        y: vw < defaultWidth ? 0 : 50,
        mount: aboutContent,
        onfocus: function() {
            this.setBackground(terminalColor)
        },
        onblur: function() {
            this.setBackground('#777')
        },
        onclose: function() {
            aboutBox = null;
        }
    });

    if (vw < defaultWidth) {
        aboutBox.addClass("no-max");
    }

});

let skillsBox;
skills.addEventListener('click', () => {

    if (skillsBox) {
        skillsBox.focus();
        skillsBox.minimize(false);
        return;
    }

    const defaultWidth = 500;
    const defaultHeight = 600;

    skillsBox = new WinBox({
        title: 'My Skills',
        width: vw < defaultWidth ? vw : defaultWidth,
        height: vw < defaultWidth ? vh : defaultHeight,
        x: vw < defaultWidth ? 0 : 100,
        y: vw < defaultWidth ? 0 : 100,
        mount: skillsContent,
        onfocus: function() {
            this.setBackground(terminalColor)
        },
        onblur: function() {
            this.setBackground('#777')
        },
        onclose: function() {
            skillsBox = null;
        }
    });

    if (vw < defaultWidth) {
        skillsBox.addClass("no-max");
    }

});

let contactBox;
contact.addEventListener('click', () => {

    if (contactBox) {
        contactBox.focus();
        contactBox.minimize(false);
        return;
    }

    const defaultWidth = 500;
    const defaultHeight = 250;

    contactBox = new WinBox({
        title: 'Contact Me',
        width: vw < defaultWidth ? vw : defaultWidth,
        height: vw < defaultWidth ? vh : defaultHeight,
        x: vw < defaultWidth ? 0 : 150,
        y: vw < defaultWidth ? 0 : 150,
        mount: contactContent,
        onfocus: function() {
            this.setBackground(terminalColor)
        },
        onblur: function() {
            this.setBackground('#777')
        },
        onclose: function() {
            contactBox = null;
        }
    });

    if (vw < defaultWidth) {
        contactBox.addClass("no-max");
    }

});
