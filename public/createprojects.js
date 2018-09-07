(function (w, d) {
    'use strict';

    function ProjectCreator(id, options) {
        this.options = options;
        this.count = 0;
        this.create = function () {
            var app = d.getElementById(id);
            for (var i = 0; i < this.options.length; i++) {
                /**
                 * Create elements
                 */
                var cardBorder = d.createElement('div'),
                    cardHeader = d.createElement('div'),
                    cardBody = d.createElement('div'),
                    cardTitle = d.createElement('h5'),
                    cardText = d.createElement('p'),
                    cardFooter = d.createElement('div');

                /**
                 * Add styles
                 */
                cardBorder.className = 'card border-dark mb-3';
                cardHeader.className = 'card-header';
                cardHeader.innerHTML = 'Project ID ' + (++this.count);
                cardBody.className = 'card-body text-dark';
                cardTitle.className = 'card-title';
                cardTitle.innerHTML = this.options[i].title;
                cardText.className = 'card-text';
                cardText.innerHTML = this.options[i].text;
                cardFooter.className = 'card-footer border-danger';
                cardFooter.innerHTML = this.options[i].skills;

                /**
                 * Append elements
                 */

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardFooter);
                cardBorder.appendChild(cardHeader);
                cardBorder.appendChild(cardBody);

                /**
                 * Append to container
                 */
                app.appendChild(cardBorder);
            }

        };
    }
    w.ProjectCreator = ProjectCreator;
})(window, document);

// console.log('hi');
listOfAllProject = [
    {
        title: `Link UpApp (web and mobile)`,
        text: `Provide a description which would provide the proposal reviewers and the students enough
                detail to understand the problem to be solved and the challenges of the project.`,
        skills: `Programming experience for IOS and Android mobile platforms (Windows and others a plus), Ability to write user friendly backend interface, Familiarity with server requirements for hosting, uptime and data collection`
    },
    {
        title: `AI Collectible/Trading Card Game Processing Unit`,
        text: `Nexus Entertainment is looking to automate part of our inventory processing and purchasing
        utilizing AI, machine learning, APIs, image and character recognition and innovative design
        to create a software and hardware solution that will enable us to detect the specific product,
        condition, and price based on both variables to either purchase from customers or add to our
        inventory system.`,
        skills: `CSS3, HTML5, JavaScript, experienceon how to integrate with and consume APIs,Ability to code on the client or server side`
    },
    {
        title: `School SAfETy App:`,
        text: `Many	schools	are	challenged	by	high	rates	of	crime,	aggressive	behavior,	and	student	
        disruption. Last	year,	79%	of	public	schools	reported	a	violent	crime.	Additionally,	national	
        student	survey	data	show	that	8%	of	students	have	been	in	a	fight	on	school	property. Beyond	
        placing	individual	students	who	engage	in	these	behaviors	at	risk,	such	behaviors	also	create	
        fear	in	other	students,	which	interferes	with	their	ability	to	engage	in	learning.	Such	problems	
        present	a	significant	challenge	for	schools	and	teachers	who	must	balance	the	demands	of	
        managing	student	behavior,	promoting	skills	and	competencies,	and	delivering	academic	
        content,	and	are	also	among	the	most	common	factors	contributing	to	teacher	and	staff	
        turnover.`,
        skills: `Programming experience for IOSand Android mobile platforms, Ability to write user friendly backend interface, Familiarity with server requirements for hosting, uptime and data collection`
    },
    {
        title: `Penetration	Testing	Approach	for	Embedded	Devices`,
        text: `Embedded	devices	on	networks	make	attractive	targets	for	hackers	because	they	
        provide	potential	footholds. These	systems	perform	a	variety	of	functions,	often	
        involving	sensitive	data	or	control	of	critical	systems.	Networking	segments,	storage	
        appliances	and	other	equipment	generally	do	not	have	end-point	protection	installed,	
        making	them	an	ideal	spot	for	an	attacker	to	lurk	undetected.`,
        skills: `Software Engineer/Embedded Engineer, have understanding of basic interface, USB, Ethernet, Serial, etc. 
        Security Knowledge, HTML, USB and Ethernet communication is also a plus`
    },
    {
        title: `Knee AR : An augmented reality concept designed to make knee exercises fun`,
        text: `Patients of all age groups with lower limb problems experience some degree of muscle wasting.
        In patients with end stage osteoarthritis of the knee wasting of Type II fibres has been found in 96% of
        patients wasting of Type I fibres in 37%.
        Furthermore, an increase in bulk of the Vastus Medialis is associated with a decrease in knee pain,
        increase in the thickness of knee cartilage and a reduced chance of a knee replacement.
        However, 70% of patients do not comply with their exercise plan.
        Encouraging compliance is particularly difficult in the younger age group and in patients with learning
        or memory difficulties.`,
        skills: `Knowledge  of  programming  for  the  latest versions of both the iOS and Android systems. Students will need to have or acquire a working knowledge of Unity, AR Kit, AR Core and Vuforia.`
    },
    {
        title: `Row crop detection using Computer Vision and Machine Learning for steering of
        Autonomous Tractors`,
        text: `Detection of row crops for auto-steering of agricultural vehicles by using cameras, computer
        vision and machine learning. The image below shows some of the challenges to make a robust
        detection of crop rows. Here are planted two different varieties of lettuce with different color.
        Other challenges are strong shadows, changing color of daylight and weeds.`,
        skills: `C++ and Python, Tensorflow for machine learning, OpenCV for computer vision, ROS (Robotic Operating System) –Kinetic on Ubuntu 16.04`
    },
    {
        title: `Development of Autosteering Simulation Environment and Anomaly Detection`,
        text: `This project has two goals: develop a hardware-in-the-loop simulation of an autosteering
        system and developing a machine learning algorithm to detect anomalous behavior. A
        simulation environment will be connected to hardware components including: an Electronic
        Control Unit, Mobile Application, Inertial Measurement Unit (IMU), and keyboard. The
        simulation will support different tractor and hardware configurations. This simulation will be
        used to generate annotated log data for common failures. These log files will then be used to
        develop a machine learning algorithm for detecting and classifying anomalous behavior.`,
        skills: `Required: Python, JAVA, and C++. Experience with standard protocols is desirable: CAN,
        TCP/IP, and SPI, and I2C. Experience with 3-D modeling and System Dynamics is preferable. `
    },
    {
        title: `Redfish Telemetry Client`,
        text: `The Redfish API specification and related schema standards provide the definition of a
        remotely accessible management REST API for a wide scope of IT equipment (Servers,
        Network, Storage), Data Center Power and Cooling equipment, and IOT equipment. The
        DMTF standards organization that produces Redfish specs also opensources a number of
        tools and API service simulation code that can be used, among other uses, to simulate
        management interfaces for a wide array of equipment types. Originally Redfish specs were
        focused on manageability for IT equipment like servers, switches and shared storage systems,
        but more recently, Redfish schema publications include specific data definitions for
        Telemetry, Sensors, Cooling and Power equipment that overlap onto Data Center facilities
        and IOT manageability and telemetry domains.`,
        skills: `Python, JSON, CSV, Javascript, Go Simulator, Linux, Docker`
    },
    {
        title: `DLMS – SolarSPELL Digital Library Management System (Improvements)`,
        text: `Through a Spring 2018 graduate student capstone, a Digital Library Management System
        (DLMS) was created for the SolarSPELL project, to aid in the management of their digital
        libraries. The SolarSPELL project focuses on providing offline digital libraries to primary
        schools in the Pacific and East Africa regions—a first library for most of these schools. As the
        project has expanded, the need to maintain the library’s content and the content meta-data has
        become a critical need. While the core of the DLMS is completed, the user interface and bulk
        content loading feature are in need of development`,
        skills: `Linux and database environment, C++, Communication skilld with non IT person`
    },
    {
        title: `SolarSENSE: OFF-GRID SOIL SENSORS`,
        text: `Food security and climate change are impacting agriculture globally, changing the way crops
        are cultivated. Small-scale farmers produce the majority of fresh food in emerging regions and
        small island states and they are the most at-risk from negative impacts, due to lack of
        knowledge about climate change or mitigation practices. This project aims to help these
        farmers by providing the necessary information that will enable them to adapt their farming
        behaviors to the changing climactic conditions, finding the right balance between high yields
        and low environmental impact. More specifically, this will be done by providing farmers with
        valuable data from soil sensors to boost their yields while accurately identifying correct levels
        of fertilizers and water needs. Existing commercial soil sensors were developed for large
        agricultural concerns (for “big ag”) and require internet connectivity, cloud-based solutions,
        and ongoing subscription fees (at rates of thousands of dollars per month). Rural small-scale
        farms are challenged with lack of networks, electric power, and the extremely high cost of
        these commercial solutions. The SolarSPELL platform can provide an off-grid data collection
        and computing solution that does not require electric power, due to its solar power and builtin
        Raspberry Pi 3 computing and networking. If this platform can be used with low cost
        sensors, it would provide a very powerful yet low cost approach to help these small-scale
        farmers. The final result would be 1) transforming the existing SolarSPELL server into an
        offline data collection hub, capable of performing analysis on the collected data, and 2) creating
        a presentation tool (or application) for the farmers, which allows them to understand their
        field/soil conditions, and to adjust their farming practices accordingly`,
        skills: `Linux Skills, Raspberry Pi 3 hardware and Raspbian OS or similar, Data algorithm creation (C++ coding), Web Server (HTML), UX/UI interface`
    },
    {
        title: `Iron Meteorite Database`,
        text: `Psyche is both the name of a metal-rich asteroid orbiting the Sun between Mars and Jupiter –
        and the name of a NASA mission to visit that asteroid, led by ASU. The Psyche spacecraft is
        targeted to launch in 2022 and travel to the asteroid using solar-electric (low-thrust)
        propulsion, arriving in 2026 (https://psyche.asu.edu/). To prepare for arrival at the asteroid,
        scientists seek an easily accessible database of the major, minor, and trace element
        composition of iron meteorites. The data currently exist but are buried in scientific
        publications in a variety of formats. This project would entail developing code that could
        find, recognize, and collect the appropriate data from many different sources and deposit it
        into a database and creating an application that would allow scientists to easily search on
        multiple parameters and export the data into standard scientific plots`,
        skills: `Expert in a programming language and OS to apply FAA regulations for a flight landing system, SEC financial or legal information regarding stock transactions, cybersecurity, etc.`
    },
    {
        title: `Open Source Cellular IoT`,
        text: `An open source IoT application that runs on a Cellular IoT network (using a platform /
            development kit)`,
        skills: `Programming skills in C/C++ would be needed. Exposure to embedded software development,
        IoT type applications, computer networking would be helpful.`
    },
    {
        title: `Castle Builder`,
        text: `Ever wanted to build a castle? The ETX Center is looking to add a web-based simulation to its
        portals focused on medieval architecture and basic physics. To this end, we are proposing that
        students build a web based simulation that allows learners to go through the process of
        designing and building a castle, rooting the process in real life architecture, physics, and
        business constraints.`,
        skills: `Students will be need to be familiar with web and HTML5 development with at least one kit
        of their choice. ETX will provide Javascript API packages that must be integrated into the final
        delivery. Students are not expected to be familiar with content domains. Instruction and design
        meetings will be scheduled.`
    },
    {
        title: `One-Click Non-Profit Customer Relationship Management`,
        text: `A consistent challenge for non-profits is Customer Relationship Management (CRM). They
        have the same needs to manage pipelines, communicate with customers (donors, volunteers,
        end-users), customize campaigns, as commercial companies, but with far fewer resources
        much less technical knowledge.
        `,
        skills: `General software engineering. Knowledge of github, java and javascript`
    },
    {
        title: `BLSI Mobile App`,
        text: `Project Aims: The specific aim of this Capstone project is to construct a software application for a
        mobile platform (tablet or phone) for use in screening patients in pediatric Emergency Departments
        (ED). The mobile application will allow Pediatric Surgeons and other emergency personnel to walk
        through an already validated algorithm and make a determination for non-operative management of
        pediatric blunt liver and spleen injuries. Currently, the algorithm (See Section 3-Other) is not in
        electronic format and to date the mechanism has been disseminated via conferences and published
        papers. By placing the algorithm in an electronic format on a mobile platform, the algorithm can be
        more widely disseminated, implemented with fidelity, thereby saving costs and lives. The Capstone
        Team is expected to:`,
        skills: `No specific content knowledge about trauma or trauma activation is needed to contribute to this study
        but the research team will benefit from students having a background in software engineering,
        application development and application engineering. Students are expected to be professional, highly
        motivated, intelligent, hard-working and organized. Ideally, students will work as a team and contribute
        collectively to the research enterprise based on their own expertise and specializations. `
    },{
        title: `Deep Learning in Pediatric Medical Imaging`,
        text: `The specific aim of this Capstone project is to apply deep-learning algorithms to
        Computed Tomography (CT) images to detect inflicted traumatic brain injury (TBI) in pediatric
        patients. Imaging data is grossly underutilized in medical settings. Software tools have far outpaced
        applications with medical imagery. Conventional algorithms using imaging data have been in some
        use for detection of diseases but with advances in machine learning, more can be done in areas
        outside of disease detection. TBI is the most frequent cause of death in very young children. Imaging
        is the most reliable data for experts to diagnose TBI and determine inflicted injury (non-accidental
        trauma). CT’s and MRIs identify the scope and severity of the injury, prior traumatic injury, the age
        of the blood accumulation and other injury patterns indicative of inflicted trauma. The purpose of this
        Capstone project is to apply deep learning algorithms to radiological data from CT scans of very
        young children diagnosed with head trauma`,
        skills: `No specific content knowledge about trauma or trauma activation is needed to contribute to this study
        but the research team will benefit from students having a background in software engineering,
        conventional machine learning algorithms and deep learning algorithms. Students are expected to be
        professional, highly motivated, intelligent, hard-working and organized. Ideally, students will work as
        a team and contribute collectively to the research enterprise based on their own expertise and
        specializations. `
    },
    {
        title: `Virtual Reality Appllication for Pediatric Pain Management`,
        text: `The specific aim of this research is to develop a virtual reality software application for use
        in hands-free headgear to assist outpatient and in-patient children in the management of pain. Children
        are treated in pediatric hospitals for acute or chronic illnesses primarily with narcotics to manage pain.
        These patients often undergo routine exams, which can cause additional stress and pain. Since children
        are often unable to use limbs or be ambulatory, hands-free gear with pain-management, software is a new
        tool Seattle Children’s Hospital has piloted to help children manage stress and pain with routine inhospital
        treatments such as wound care. When pediatric patients are discharged to home with narcotics
        after treatment, concerns abound among medical practitioners regarding the long-term effect of narcotics
        in pediatric populations. As a result, some settings have considered providing head gear for families to
        purchase in non-narcotic management of pain after discharge. These efforts are very new but more can be
        done to 1) improve the software; 2) create applications for different uses; and 2) demonstrate effect in
        clinical use. In this project, software engineers will 1) survey the current literature and tools in the use of
        VR for pediatric pain management; and 2) develop/improve software for use in a pediatric clinical
        population at PCH. This project attempts to construct a non-invasive, non-narcotic pain management
        technique for use in pediatric populations by developing/improving VR software for a hands-fee device.
        This undertaking will assist in pediatric non-narcotic stewardship. `,
        skills: `No specific content knowledge about trauma or pain management is needed to contribute to this study
        but the research team will benefit from students having a background in software engineering, VR, the
        current state-of-the-art in VR for clinical purposes and VR hardware. PCH does not currently own a
        developer-level VR headset but we do own a VR headset currently used in pilot form for pain
        management. Students are expected to be professional, highly motivated, intelligent, hardworking
        and organized. Ideally, students will work as a team and contribute collectively to the research
        enterprise based on their own expertise and specializations. `
    },
    {
        title: `Sakai Service and Tool to Manage Student Progress in a Course`,
        text: `The objective of this project is to create a Sakai service and API that allows to define how to
        measure the progress in a course, allows to control that progress, and allows to query about
        the progress. With that service we will create a tool to interact with that service allowing the
        instructor to create their milestones in the course and define how to measure the progress of
        the students and get the reports about that progress. That tool will have a student version that
        will allow him to view his own progress in a course.`,
        skills: `Mainly they will be working with Java 8 with Spring in one side, and Javascript/HTML in
        the other. Some Java knowledge would save a lot of time. Javascript and UX design
        knowledge will be interesting too. The team should have some people centered in the
        backend and others centered in the frontend (as a real team).
        They will deal with Apache, Tomcat, Maven, MySQL (and maybe test in Oracle) an IDE as
        Eclipse or IntelliJ during the project. If they know how to work with these, it will save time
        in the project, especially if they have used Maven before.
        They can develop in Windows, Mac or Linux. Sakai can work and be developed in any of
        these. As usually the production servers are linux, a basic linux knowledge can be useful.`
    },
    {
        title: `Solar System Designer`,
        text: `How do solar systems form? The ETX Center is looking to add a web-based simulation to its
        portals that enables learners to populate a star with planets, creating a functioning solar
        system. This solar system model will use real life physics concepts such as gravity and other
        classical mechanics. Additionally, we have art and science data from NASA to help enrich
        the experience and make it as accurate as possible.`,
        skills: `Students will be need to be familiar with web and HTML5 development with at least one kit
        of their choice. ETX will provide Javascript API packages that must be integrated into the
        final delivery. Students are not expected to be familiar with content domains. Instruction and
        design meetings will be scheduled.`
    },
    {
        title: `Educational Augmented Reality`,
        text: `This project is an augmented reality application for an Android phone using ARCore. The
        idea is to create a system for supplementing textbooks/eBooks with AR content using the
        application. The application would read some sort of code in the textbook and using that
        information, it would render supplemental content to the user via augmented reality. There
        are two parts to this project, creating the application which will display the content to the
        user, and building a system for adding additional content. `,
        skills: `The required background would be experience with software development, and ideally,
        Android development. It would also be great to have experience with AR/VR or web service
        development. `
    },
    {
        title: `Wildlife Refuge`,
        text: `What do animals do in their free time? The ETX Center is looking to add a web-based
        simulation to its portals that enables learners to create a wildlife refuge to observe how an
        ecosystem functions. To this end, we are proposing that students build a web based
        simulation that allows learners to go through the process of populating a refuge with wildlife
        and then observing the results. This project will require a considerable amount of data and
        artificial intelligence design.`,
        skills: `Students will be need to be familiar with web and HTML5 development with at least one kit
        of their choice. ETX will provide Javascript API packages that must be integrated into the
        final delivery. Students are not expected to be familiar with content domains. Instruction and
        design meetings will be scheduled`
    },
    {
        title: `Network Functions Virtualization (NFV) Controller for Passive Optical Network`,
        text: `Tibit Communications has developed a 10Gbps symmetrical Optical Line Terminal (OLT) that
        is pluggable in a standard Ethernet Switch. The device is often called a MicroOLT in the
        industry but Tibit markets it as the MicroPlug OLT. The MicroOLT can be used by Telecom
        companies (i.e. AT&T, Telefonica, France Telecom) and Cable companies (i.e. Comcast,
        Charter, Liberty Global) to provide 10Gbps fiber to the home or fiber to the business services.
        It will also be used within companies for fiber to the workgroup or within University campuses
        for fiber connectivity to the dorm or class room. Passive Optical networks allow for a very
        high density of point-to-multipoint connectivity. From one MicroOLT port in a switch, up to
        128 subscriber Optical Network Terminals (ONTs) can be connected through a passive splitter
        at 20km.`,
        skills: `Describe the expected knowledge of specific programming languages, operating systems, or
        technologies for the project. Also, will the team have to enhance knowledge about a specific 
        5
        application domain to complete the project. For example, FAA regulations for a flight landing
        system, SEC financial or legal information regarding stock transactions, cybersecurity, etc.
        Students should be familiar with computer networking, programming in Python, Linux, user
        and interface design.`
    },
    {
        title: `Patient Centric Pharmacy Supply Chain Ledger`,
        text: `Often when an anesthesiologist administers a medication in the operating room, the medicine
        is scanned into the digital pharmacy workstation prior to application. Unfortunately, only the
        name of the medication is listed from a scanned event. The lot/batch number of the medicine
        along with the expiration date does not get captured into the read. Hence, at the patient level
        a medicine gets associated with the patient but not the specific supply chain information. If
        we do not have the specific information about the drug that was administered associated to a
        specific patient future investigation of contamination or recall cannot be ideally targeted to a
        certain patient population.
        The objective of this project is to develop an optical character recognized smart phone app that
        will scan the medication being administered and record the medication name, lot number and
        the expiration and input this information to the EMR that is being used by the anesthesiologist.
        This will all be done using blockchain ledger technology as a patient focused ledger system.
        As the patient’s clinical condition presumes more future anesthetics a record system needs to
        be built to continue to capture their medication profiles. `,
        skills: `Students will need some implementation and knowledge of a blockchain environment that is
        based on secured nodal verification. Have abilities to create a mobile application, enhance
        OCR technology and create a secure data infrastructure in Android/iOS environments.
        Knowledge of how to secure PHI data on a mobile phone app would be very beneficial.`
    },
    {
        title: `Patient Arrival Notification System`,
        text: `Often when there is a line-up of inpatients transporting from the hospital system to the
        preoperative staging environment at PCH the Operating Room (OR) clinical staff is unaware
        of arrival of these patients. Invariably a phone call from the preoperative nurses communicates
        the arrival of these patients into the preoperative staging bays leaving them inundated with
        another task of communicating verbally to the OR staff.
        The solution is to make a system that will have a digital notification system that allows a
        broadcast of announcement that the patient has arrived into a certain location. The sequence
        of events of this broadcast is as follows:`,
        skills: `Students will have abilities to create a mobile application and create a secure data
        infrastructure in Android/iOS environments. Knowledge of how to secure PHI data on a
        mobile phone app would be very beneficial`
    },
    {
        title: `Simulation-Based Inquiry-Oriented Linear Algebra`,
        text: `Provide a description that provides the proposal reviewers and the students enough detail to
        understand the problem to be solved and the challenges of the project.
        Simulation-Based Inquiry-Oriented Linear Algebra is a National Science Foundation funded
        grant to create games to help students learn linear algebra. Preliminary games have been
        developed by students in two other courses giving our team many ideas of possible directions
        for creating new games or further developing the current games for learning about vectors
        and matrices. We would like a capstone team to work with us to extend the scope of one of
        these games or to create a new game based on what can be learned from the previously
        created games.`,
        skills: `Students in software design or other engineering majors in Fulton will typically have studied
        mathematics courses including linear algebra. Advanced knowledge of linear algebra is not
        required as the topics involved are fairly introductory and can be developed in coordination
        with the mathematics education experts on the sponsoring team. Students should be proficient
        with the software development Lifecyle. Experience with the Unity game engine is desirable,
        or the student should have the ability/interest to easily learn the engine at the beginning of the
        project. Students that have taken a course in introductory 3D graphics or game development
        would be preferred. `
    },
    {
        title: `Adaptive Decompiler – Machine Learning for Reverse Engineering`,
        text: `Decompilation is the process of inferring the source code of a program from only a compiled
        and optimized machine code representation. From the developer point of view, we are use to
        having a source code representation of a program which is appropriate for understanding and
        extension tasks. However, it is not uncommon to be in a situation where only a binary
        executable exists. For instance, when source code has been lost, or when dealing with a 3rd
        party executable where the 3rd part does not release source code. More specific examples
        include reverse engineering a virus or malicious program to determine its payload.
        Decompilation is a non-trivial task, with no general solution. In fact, it is impossible to
        infer a program’s original source code from only a binary due to the loss of information induced
        by the compilation process (particularly optimization). In the past, decompilation was a task
        left to experts who would manually review a disassembly of a program, and use their
        knowledge to determine what the original code may have been. This is an arduous task. More
        recently, then have been attempts to automate the decompilation of executables (see Section 3
        for related projects). Existing solutions take the approach of using mostly handwritten
        heuristics for detecting either standard language constructs, or optimization patterns which
        show up in generated machine code. Typically a collection of “signatures” (code patterns) must
        be maintained for each language supported. Although this approach is better than the manual
        one, it is still costly to create a decompiler.`,
        skills: `The list which follows is effectively the outcomes for your skillset by the end of the project.
        Teams which do not have many of the background items listed below should be aware that
        their time investment will increase over the normal expectation for their capstone course.
        Expected skills include:
         Knowledge of Assembly Programming (likely x86).
         Knowledge of Computer Architecture (e.g., load/store, callstack representation), and
        Operating Systems (e.g., executable formats like PE and ELF, run-time environments,
        system call sub-systems).
         Knowledge of Compilers (intermediate code representation, code generation, code
        optimization)
         Knowledge of Machine Learning Techniques (supervised, unsupervised methods)
         Knowledge of Programming Language Specification (i.e., grammars)
         Knowledge of Reverse Engineering Tools (static and run-time inspection tools)
         Knowledge of Regression Testing
         Ability to write concise, accurate, and sound explanations for technical systems.`
    },
    {
        title: `Arduino run time library scaling to smaller memory / pin count devices
        `,
        text: `The new family of series 0 and series 1 AVR Microcontrollers required a complete
        report of the basic GPIO and internal function support libraries.
        • Base level support completed for the Uno Wi Fi Rev 2 but the new features in the 0
        ad 1 series allow for easier scaling both in size and feature enhancement.
        • Microchip needs to improve the ability to scale customers up and down the new AVR
        product lines while still keeping the customer in the familiar Arduino programming
        environment.`,
        skills: `Comfortable with embedded C / C++, experience with Arduino development would be
        advantageous. `
    },
    {
        title: `Improving Graphics on Aviation Displays`,
        text: `ASU Capstone team will evaluate and provide recommendations and a prototype for
        improving the graphics on the Honeywell avionics display. The objective is to create a
        more modern and visually appealing appearance. The team will evaluate updates to the
        current Honeywell Epic DU1310 displays products. As this flight deck wide graphics
        refresh would be part of a software retrofit into existing fielded avionics products, the
        graphics improvements need to be done within the current hardware environment. No
        GPU upgrades with corresponding hardware re-certification costs can be made. C/C++
        and OpenGL 1.2 would need to be utilized. `,
        skills: `Ability to utilize software coding skills in C++ and OpenGL 1.2, as well as have a
        creative eye towards making the graphics more visually appealing are needed. An
        interest in aviation, avionics, or flight operations would make the project even more
        enjoyable. Willingness to think creatively, brainstorm ideas, and learn to work within the
        existing hardware constraints are all key success attributes.`
    },
    {
        title: `ASU Parking App (Android)`,
        text: `Dr. Lou and her team are developing an Android mobile app to help drivers find parking
        more quickly and easily. The app is designed not only to provide current parking
        information, but also predicted parking availabilities and parking recommendations. Student
        teams will work with a functioning alpha version of the app to implement new features.`,
        skills: `Student teams are expected to have background in Android app development (both backend
            and frontend). Existing source code is developed with Android Studio. Student teams will
            meet with Dr. Lou and her team to learn about 1) the parking problem, 2) the algorithms
            already developed, and 3) requirements for desired features`
    },
    {
        title: `ASU Parking App (iOS) `,
        text: `Dr. Lou and her team are developing a mobile app to help drivers find parking more quickly
        and easily. The app is designed not only to provide current parking information, but also
        predicted parking availabilities and parking recommendations. Student teams will develop
        an iOS version of the app from scratch based on design requirements and an existing Android
        version of the app.`,
        skills: `Student teams are expected to have background in iOS app development (both backend and
            frontend). Student teams may also need knowledge in Android app development because the
            existing source code is developed with Android Studio. Student teams will meet with Dr.
            Lou and her team to learn about 1) the parking problem, 2) the algorithms already developed,
            and 3) requirements for desired features.`
    },
    {
        title: `Open Source Interface for Public Warning and Alert Dissimination`,
        text: `At a high level the project can be broken down into the following steps
        1- Develop understanding of emergency alerting architectures in the U.S. from the alert
        origination side to FEMA IPAWS. This includes the OASIS Common Alerting Protocol
        (CAP).
        2- Use / leverage well known service layer standards / protocols that allows for
        interoperability between alert origination software and FEMA IPAWS.
        3- Develop an open source solution that can be run on commodity hardware to allow alert
        originators to easily interface to FEMA IPAWS.
        4- Develop an open source solution for a FEMA IPAWS-like alert aggregator that can be
        deployed in non-US markets to support the ITU initiatives for global public warning.`,
        skills: `Programming skills in C/C++ would be needed. Exposure to embedded software development,
        IoT type applications, computer networking would be helpful`
    },
    {
        title: `Trauma Activation Algorithm-Phase II`,
        text: `The specific aim of this project is to continue the work of last’ years Capstone team
        (Team 8) and further develop an evidence-based self-learning algorithm that optimizes ED resources
        for the highest level (level 1) pediatric trauma activation. `,
        skills: `No specific content knowledge about hospitals, emergency departments (ED) trauma or trauma
        activation are needed to contribute to this study but the research team will benefit from students having
        a background in software engineering, self-learning tools and techniques as well as bioinformatics,
        statistics, computer science, data analytics, and decision-making. Students are expected to be highly
        self-motivated and self-taught. Because innovative new tools must be developed, the ability to quickly
        acquire new concepts, modify and apply them to the project will be very useful to students working on
        this project. Ideally, students will work as a team and contribute collectively to the research enterprise
        based on their own expertise and specializations. Students are expected to be professional, intelligent,
        hard-working and highly organized. `
    },
    {
        title: `Mobile app for data collection and query`,
        text: `This project creates a mobile app to be used as a data collection tool in
        the field by wildlife biologists. Data are collected by a wildlife user in the field and then
        synced to a SQL-lite database. One major benefit of the design, is that the database is stored
        on the mobile device and the user can query the database to view a capture history of
        uniquely marked animals. The app is currently configured for a study on lizards, but we have
        a vision that would expand this mobile app to be adaptable to a wide range of biological data
        and allow the user to define data fields and dropdown boxes. `,
        skills: `Mobile app building, database building, connecting the two. I’m not an expert on the type of
        software needed but we could get input from Dr. Lindquist. `
    },
    {
        title: `Cloud Computing with AI`,
        text: `Solar power generation is becoming a significant industry with a high growth rate. Artificial intelligence
        recent advances are promising to solve some of the most critical problems in this domain.
        When the clouds cover the solar panels, electric power output drops dramatically, and huge diesel
        generators start running to compensate for the lost power. This process takes few minutes and result in
        irregular power supply. AI promises to solve the problem by predicting the future drop of solar power
        generation due to cloud movements, and giving the signal to start the diesel generations earlier.
        This project focuses on building and training an intelligent system for Solar Plant Output Prediction
        (SPOP) to recognize and track the localized cloud cover that could impact the short-term output of the
        solar farms before they happen.
        Students will receive data representing cloud images and the corresponding power output. An AI
        system will be trained to understand the correlation between both, and hence predict the future cloud
        movements, just like humans do.`,
        skills: `-Good command of programming in general (Java and Java script and others)
        -Knowledge of client server and multi-tier application development
        -Ability to work in teams and/or individually
        -Commitment to learning and working in their project
        -No prior AI experience is required`
    }

];

var ProjectManager = new ProjectCreator('app', listOfAllProject);
ProjectManager.create();