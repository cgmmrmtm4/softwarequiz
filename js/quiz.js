let allFlashCards = [
    {"chapter":1,"term":"coverage","definition":"The degree to which specified coverage items have been determined or have been exercised by a test suite expressed as a percentage."},
    {"chapter":1,"term":"debugging","definition":"The process of finding, analyzing and removing the causes of failures in software."},
    {"chapter":1,"term":"defect","definition":"An imperfection or deficiency in a work product where it does not meet its requirements or specifications."},
    {"chapter":1,"term":"error","definition":"A human action that produces an incorrect result."},
    {"chapter":1,"term":"failure","definition":"An event in which a component or system does not perform a required function within specified limits."},
    {"chapter":1,"term":"quality","definition":"The degree to which a component, system or process meets specified requirements and/or user/customer needs and expectations."},
    {"chapter":1,"term":"quality assurance", "definition":"Part of quality management focused on providing confidence that quality requirements will be fulfilled."},
    {"chapter":1,"term":"root cause","definition":"A source of a defect such that if it is removed, the occurrence of the defect type is decreased or removed."},
    {"chatper":1,"term":"test analysis","definition":"The activity that identifies test conditions by analyzing the test basis."},
    {"chatper":1,"term":"test basis","definition":"The body of knowledge used as the basis for test analysis and design."},
    {"chapter":1,"term":"test case", "definition":"A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions."},
    {"chatper":1,"term":"test completion","definition":"The activity that makes test assets available for later use, leaves test environments in a satisfactory condition and communicates the results of testing to relevant stakeholders."},
    {"chapter":1,"term":"test condition","definition":"An aspect of the test basis that is relevant in order to achieve specific test objectives."},
    {"chapter":1,"term":"test control","definition":"A test management task that deals with developing and applying a set of corrective actions to get a test project on track when monitoring shows a deviation from what was planned."},
    {"chapter":1,"term":"test data","definition":"Data created or selected to satisfy the execution preconditions and inputs to execute one or more test cases."},
    {"chapter":1,"term":"test design","definition":"The activity of deriving and specifying test cases from test conditions."},
    {"chapter":1,"term":"test execution","definition":"The process of running a test on the component or system under test, producing actual result(s)."},
    {"chapter":1,"term":"test execution schedule","definition":"A schedule for the execution of test suites within a test cycle."},
    {"chatper":1,"term":"test implementation","definition":"The activity that prepares the testware needed for test execution based on test analysis and design."},
    {"chapter":1,"term":"test monitoring","definition":"A test management activity that involves checking the status of testing activities, identifying any variances from the planned or expected status, and reporting status to stakeholders."},
    {"chapter":1,"term":"test object","definition":"The component or system to be tested."},
    {"chapter":1,"term":"test objective","definition":"A reason or purpose for designing and executing a test."},
    {"chatper":1,"term":"test oracle","definition":"A source to determine expected results to compare with the actual result of the system under test."},
    {"chapter":1,"term":"test planning","definition":"The activity of establishing or updating a test plan."},
    {"chapter":1,"term":"test procedure","definition":"A sequence of test cases in execution order, and any associated actions that may be required to set up the initial preconditions and any wrap up activities post execution."},
    {"chapter":1,"term":"test suite","definition":"A set of test cases or test procedures to be executed in a specific test cycle."},
    {"chapter":1,"term":"testing","definition":"The process consisting of all lifecycle activities, both static and dynamic, concerned with planning, preparation and evaluation of software products and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects."},
    {"chapter":1,"term":"testware","definition":"Work products produced during the test process for use in planning, designing, executing, evaluating and reporting on testing."},
    {"chapter":1,"term":"traceability","definition":"The degree to which a relationship can be established between two or more work products."},
    {"chapter":1,"term":"validation","definition":"Confirmation by examination and through provision of objective evidence that the requirements for a specific intended use or application have been fulfilled."},
    {"chapter":1,"term":"verification","definition":"Confirmation by examination and through provision of objective evidence that specified requirements have been fulfilled."},
    {"chapter":2,"term":"acceptance testing","definition":"Formal testing with respect to user needs, requirements, and business processes conducted to determine whether or not a system satisfies the acceptance criteria and to enable the user, customers or other authorized entity to determine whether or not to accept the system."},
    {"chapter":2,"term":"alpha testing","definition":"Simulated or actual operational testing conducted in the developer's test environment, by roles outside the development organization."},
    {"chapter":2,"term":"beta testing","definition":"Simulated or actual operational testing conducted at an external site, by roles outside the development organization."},
    {"chapter":2,"term":"commercial off-the-shelf","definition":"A software product that is developed for the general market, i.e. for a large number of customers, and that is delivered to many customers in identical format."},
    {"chapter":2,"term":"component integration testing","definition":"Testing performed to expose defects in the interfaces and interactions between integrated components."},
    {"chapter":2,"term":"component testing","definition":"The testing of individual hardware or software components."},
    {"chapter":2,"term":"confirmation testing","definition":"Dynamic testing conducted after fixing defects with the objective to confirm that failures caused by those defects do not occur anymore."},
    {"chapter":2,"term":"contractual acceptance testing","definition":"Acceptance testing conducted to verify whether a system satisfies its contractual requirements."},
    {"chapter":2,"term":"functional testing","definition":"Testing conducted to evaluate the compliance of a component or system with functional requirements."},
    {"chapter":2,"term":"impact analysis","definition":"The identification of all work products affected by a change, including an estimate of the resources needed to accomplish the change."},
    {"chapter":2,"term":"integration testing","definition":"Testing performed to expose defects in the interfaces and in the interactions between integrated components or systems."},
    {"chapter":2,"term":"maintenance testing","definition":"Testing the changes to an operational system or the impact of a changed environment to an operational system."},
    {"chapter":2,"term":"non-functional testing","definition":"Testing conducted to evaluate the compliance of a component or system with non-functional requirements."},
    {"chapter":2,"term":"operational acceptance testing","definition":"Operational testing in the acceptance test phase, typically performed in a (simulated) operational environment by operations and/or systems administration staff focusing on operational aspects, e.g., recoverability, resource-behavior, installability and technical compliance."},
    {"chapter":2,"term":"regression testing","definition":"Testing of a previously tested component or system following modification to ensure that defects have not been introduced or have been uncovered in unchanged areas of the software, as a result of the changes made."},
    {"chapter":2,"term":"regulatory acceptance testing","definition":"Acceptance testing conducted to verify whether a system conforms to relevant laws, policies and regulations."},
    {"chapter":2,"term":"sequential development model","definition":"A type of development lifecycle model in which a complete system is developed in a linear way of several discrete and successive phases with no overlap between them."},
    {"chapter":2,"term":"system integration testing","definition":"Testing the combination and interaction of systems."},
    {"chapter":2,"term":"system testing","definition":"Testing an integrated system to verify that it meets specified requirements."},
    {"chapter":2,"term":"test basis","definition":"The body of knowledge used as the basis for test analysis and design."},
    {"chapter":2,"term":"test case","definition":"A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions."},
    {"chapter":2,"term":"test environment","definition":"An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to conduct a test."},
    {"chapter":2,"term":"test level","definition":"A specific instantiation of a test process."},
    {"chapter":2,"term":"test object","definition":"The component or system to be tested."},
    {"chapter":2,"term":"test objective","definition":"A reason or purpose for designing and executing a test."},
    {"chapter":2,"term":"test type","definition":"A group of test activities based on specific test objectives aimed at specific characteristics of a component or system."},
    {"chapter":2,"term":"user acceptance testing","definition":"Acceptance testing conducted in a real or simulated operational environment by intended users focusing their needs, requirements and business processes."},
    {"chapter":2,"term":"white-box testing","definition":"Testing based on an analysis of the internal structure of the component or system."},
    {"chapter":3,"term":"ad hoc reviewing","definition":"A review technique carried out by independent reviewers informally, without a structured process."},
    {"chapter":3,"term":"checklist-based reviewing","definition":"A review technique guided by a list of questions or required attributes."},
    {"chapter":3,"term":"dynamic testing","definition":"Testing that involves the execution of the software of a component or system."},
    {"chapter":3,"term":"formal review","definition":"A form of review that follows a defined process with a formally documented output."},
    {"chapter":3,"term":"informal review","definition":"A type of review without a formal (documented) procedure."},
    {"chapter":3,"term":"inspection","definition":"A type of formal review to identify issues in a work product, which provides measurement to improve the review process and the software development process."},
    {"chapter":3,"term":"perspective-based reading","definition":"A review technique whereby reviewers evaluate the work product from different viewpoints."},
    {"chapter":3,"term":"review","definition":"A type of static testing during which a work product or process is evaluated by one or more individuals to detect issues and to provide improvements."},
    {"chapter":3,"term":"role-based reviewing","definition":"A review technique where reviewers evaluate a work product from the perspective of different stakeholder roles."},
    {"chapter":3,"term":"scenario-based reviewing","definition":"A review technique where the review is guided by determining the ability of the work product to address specific scenarios."},
    {"chapter":3,"term":"static analysis","definition":"The process of evaluating a component or system without executing it, based on its form, structure, content, or documentation."},
    {"chapter":3,"term":"static testing","definition":"Testing a work product without code being executed."},
    {"chapter":3,"term":"technical review","definition":"A formal review type by a team of technically-qualified personnel that examines the suitability of a work product for its intended use and identifies discrepancies from specifications and standards."},
    {"chapter":3,"term":"walkthrough","definition":"A step-by-step presentation by the author of a document in order to gather information and to establish a common understanding of its content."},
    {"chapter":4,"term":"black-box test technique","definition":"A procedure to derive and/or select test cases based on an analysis of the specification, either functional or non-functional, of a component or system without reference to its internal structure."},
    {"chapter":4,"term":"boundary value analysis","definition":"A black-box test technique in which test cases are designed based on boundary values."},
    {"chapter":4,"term":"checklist-based testing","definition":"An experience-based test technique whereby the experienced tester uses a high-level list of items to be noted, checked, or remembered, or a set of rules or criteria against which a product has to be verified."},
    {"chapter":4,"term":"coverage","definition":"The degree to which specified coverage items have been determined or have been exercised by a test suite expressed as a percentage."},
    {"chapter":4,"term":"decision coverage","definition":"The coverage of decision outcomes."},
    {"chapter":4,"term":"decision table testing","definition":"A black-box test technique in which test cases are designed to execute the combinations of inputs and/or stimuli (causes) shown in a decision table."},
    {"chapter":4,"term":"error guessing","definition":"A test technique in which tests are derived on the basis of the tester's knowledge of past failures, or general knowledge of failure modes."},
    {"chapter":4,"term":"equivalence partitioning","definition":"A black-box test technique in which test cases are designed to exercise equivalence partitions by using one representative member of each partition."},
    {"chapter":4,"term":"experience-based test technique","definition":"A procedure to derive and/or select test cases based on the tester's experience, knowledge and intuition."},
    {"chapter":4,"term":"exploratory testing","definition":"An approach to testing whereby the testers dynamically design and execute tests based on their knowledge, exploration of the test item and the results of previous tests."},
    {"chapter":4,"term":"state transition testing","definition":"A black-box test technique using a state transition diagram or state table to derive test cases to evaluate whether the test item successfully executes valid transitions and blocks invalid transitions."},
    {"chapter":4,"term":"statement coverage","definition":"The percentage of executable statements that have been exercised by a test suite."},
    {"chapter":4,"term":"test technique","definition":"A procedure used to derive and/or select test cases."},
    {"chapter":4,"term":"use case testing","definition":"A black-box test technique in which test cases are designed to execute scenarios of use cases."},
    {"chapter":4,"term":"white-box test technique","definition":"A procedure to derive and/or select test cases based on an analysis of the internal structure of a component or system."},
    {"chapter":5,"term":"configuration management","definition":"A discipline applying technical and administrative direction and surveillance to identify and document the functional and physical characteristics of a configuration item, control changes to those characteristics, record and report change processing and implementation status, and verify compliance with specified requirements."},
    {"chapter":5,"term":"defect management","definition":"The process of recognizing and recording defects, classifying them, investigating them, taking action to resolve them, and disposing of them when resolved."},
    {"chapter":5,"term":"entry criteria","definition":"The set of conditions for officially starting a defined task."},
    {"chapter":5,"term":"exit criteria","definition":"The set of conditions for officially completing a defined task."},
    {"chapter":5,"term":"product risk","definition":"A risk impacting the quality of a product."},
    {"chapter":5,"term":"project risk","definition":"A risk that impacts project success."},
    {"chapter":5,"term":"risk","definition":"A factor that could result in future negative consequences."},
    {"chapter":5,"term":"risk level","definition":"The qualitative or quantitative measure of a risk defined by impact and likelihood."},
    {"chapter":5,"term":"risk-based testing","definition":"Testing in which the management, selection, prioritization, and use of testing activities and resources are based on corresponding risk types and risk levels."},
    {"chapter":5,"term":"test approach","definition":"The implementation of the test strategy for a specific project."},
    {"chapter":5,"term":"test control","definition":"A test management task that deals with developing and applying a set of corrective actions to get a test project on track when monitoring shows a deviation from what was planned."},
    {"chapter":5,"term":"test estimation","definition":"The calculated approximation of a result related to various aspects of testing (e.g., effort spent, completion date, costs involved, number of test cases, etc.) which is usable even if input data may be incomplete, uncertain, or noisy."},
    {"chapter":5,"term":"test manager","definition":"The person responsible for project management of testing activities and resources, and evaluation of a test object. The individual who directs, controls, administers, plans and regulates the evaluation of a test object."},
    {"chapter":5,"term":"test monitoring","definition":"A test management activity that involves checking the status of testing activities, identifying any variances from the planned or expected status, and reporting status to stakeholders."},
    {"chapter":5,"term":"test plan","definition":"Documentation describing the test objectives to be achieved and the means and the schedule for achieving them, organized to coordinate testing activities."},
    {"chapter":5,"term":"test planning","definition":"The activity of establishing or updating a test plan."},
    {"chapter":5,"term":"test progress report","definition":"A test report produced at regular intervals about the progress of test activities against a baseline, risks, and alternatives requiring a decision."},
    {"chapter":5,"term":"test strategy","definition":"Documentation that expresses the generic requirements for testing one or more projects run within an organization, providing detail on how testing is to be performed, and is aligned with the test policy."},
    {"chapter":5,"term":"test summary report","definition":"A test report that provides an evaluation of the corresponding test items against exit criteria."},
    {"chapter":5,"term":"tester","definition":"A skilled professional who is involved in the testing of a component or system."},
    {"chapter":6,"term":"data-driven testing","definition":"A scripting technique that stores test input and expected results in a table or spreadsheet, so that a single control script can execute all of the tests in the table. Data-driven testing is often used to support the application of test execution tools such as capture/playback tools."},
    {"chapter":6,"term":"keyword-driven testing","definition":"A scripting technique that uses data files to contain not only test data and expected results, but also keywords related to the application being tested. The keywords are interpreted by special supporting scripts that are called by the control script for the test."},
    {"chapter":6,"term":"performance testing tool","definition":"A test tool that generates load for a designated test item and that measures and records its performance during test execution."},
    {"chapter":6,"term":"test automation","definition":"The use of software to perform or support test activities, e.g., test management, test design, test execution and results checking."},
    {"chapter":6,"term":"test execution tool","definition":"A test tool that executes tests against a designated test item and evaluates the outcomes against expected results and postconditions."},
    {"chapter":6,"term":"test management tool","definition":"A tool that provides support to the test management and control part of a test process. It often has several capabilities, such as testware management, scheduling of tests, the logging of results, progress tracking, incident management and test reporting."}
];
let possibleAnswers=["A","B","C","D"];

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Get the data that will be placed on the page.
//After a term, 4 definitions including the correct one.
//The multiple choice letter that contains the correct answer.
//
function getFlashCardPageData() {
    let pageData={};
    let ranFlashCard = -1;
    let getFlashCard=getRandomInt(0,allFlashCards.length-1);

    //Store Term
    pageData.term="";
    pageData.term=allFlashCards[getFlashCard].term;
    let FlashCardChapter = allFlashCards[getFlashCard].chapter;

    //3 additional defintions for the multiple choice section. 
    //Must be three unique numbers and must not include the actual answer.
    //Initial array to -1 in each element.
    let fourDefinitions=[-1,-1,-1,-1];
    //Place the correct answer randomly in the defintions array.
    let offset=getRandomInt(0,3);
    fourDefinitions[offset]=getFlashCard;
    //Save the correct answer letter to compare against.
    pageData.correctAnswer=-1;
    pageData.correctAnswer=possibleAnswers[offset];
    //replace will be the offset where we put one of the three wrong definitions.
    let replace = 0;

    //Replace all -1 entries with a unique definition.
    while (fourDefinitions.indexOf(-1) !== -1) {
        ranFlashCard=getRandomInt(0,allFlashCards.length-1);
        //Definitions should be from the same chapter.
        if (FlashCardChapter !== allFlashCards[ranFlashCard].chapter) {
            continue;
        }
        //Already exists in array get another one.
        if (fourDefinitions.includes(ranFlashCard)) {
            continue;
        } else {
            //replace a -1 with this offset.
            replace = fourDefinitions.indexOf(-1);
            fourDefinitions[replace] = ranFlashCard;
        }
    }
    pageData.mc=[];
    //Could have done this in a loop but since there are only four...
    pageData.mc[0]=allFlashCards[fourDefinitions[0]].definition;
    pageData.mc[1]=allFlashCards[fourDefinitions[1]].definition;
    pageData.mc[2]=allFlashCards[fourDefinitions[2]].definition;
    pageData.mc[3]=allFlashCards[fourDefinitions[3]].definition;

    return (pageData);
}

// We have picked the correct selection, show the success message
// using the succes color.
function correctSelection(answer) {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "The correct answer is " + answer;
    resultElement.className = "correct";
    return;
}

// We have picked the incorrect selection, show the correct answer
// using the failure color.
function incorrectSelection(answer) {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "Incorrect, the correct answer is " + answer;
    resultElement.className = "incorrect";
    return;
}

// Let's clear the result field in case it may have data from the previous
// result.
function clearSelection() {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    resultElement.className="correct";
    return;
}

// Update the html page with the data.
function updatePage(fc) {
    //Term Section
    let termElement=document.getElementById("term");
    termElement.innerHTML=fc.term;
    //MC section
    let mcAElement=document.getElementById("A");
    mcAElement.innerHTML=fc.mc[0];
    mcAElement.className="info";
    let mcBElement=document.getElementById("B");
    mcBElement.innerHTML=fc.mc[1];
    mcBElement.className="info";
    let mcCElement=document.getElementById("C");
    mcCElement.innerHTML=fc.mc[2];
    mcCElement.className="info";
    let mcDElement=document.getElementById("D");
    mcDElement.innerHTML=fc.mc[3];
    mcDElement.className="info";
}

function NextTermCallBack() {
    clearSelection();
    fc=getFlashCardPageData();
    updatePage(fc);
    disarmNextTermButton();
    armMCButtons(fc);
    return;
}

function disarmNextTermButton() {
    let anotherBtn = document.getElementById("another");
    anotherBtn.removeEventListener("click", NextTermCallBack);
    anotherBtn.className="inactive";
    return;
}

function armNextTermButton() {
    let anotherBtn = document.getElementById("another");
    anotherBtn.addEventListener("click", NextTermCallBack);
    anotherBtn.className="active";
    return;
}

function disarmMCButtons() {
    let aBtn = document.getElementById("aButton");
    aBtn.removeEventListener("click", aCallBack);
    aBtn.className="unarmed";
    let bBtn = document.getElementById("bButton");
    bBtn.removeEventListener("click", bCallBack);
    bBtn.className="unarmed";
    let cBtn = document.getElementById("cButton");
    cBtn.removeEventListener("click", cCallBack);
    cBtn.className="unarmed";
    let dBtn = document.getElementById("dButton");
    dBtn.removeEventListener("click", dCallBack);
    dBtn.className="unarmed";
}

function aCallBack() {
    let mcAElement = document.getElementById("A");
    if (fc.correctAnswer === "A") {
        mcAElement.className="correct";
        correctSelection(fc.correctAnswer);
    } else {
        mcAElement.className="incorrect";
        let correctElement=document.getElementById(fc.correctAnswer);
        correctElement.className="correct";
        incorrectSelection(fc.correctAnswer);
    }
    disarmMCButtons();
    armNextTermButton();
}

function bCallBack() {
    let mcBElement = document.getElementById("B");
    if (fc.correctAnswer === "B") {
        mcBElement.className="correct";
        correctSelection(fc.correctAnswer);
    } else {
        mcBElement.className="incorrect";
        let correctElement=document.getElementById(fc.correctAnswer);
        correctElement.className="correct";
        incorrectSelection(fc.correctAnswer);
    }
    disarmMCButtons();
    armNextTermButton();
}

function cCallBack() {
    let mcCElement = document.getElementById("C");
    if (fc.correctAnswer === "C") {
        mcCElement.className="correct";
        correctSelection(fc.correctAnswer);
    } else {
        mcCElement.className="incorrect";
        let correctElement=document.getElementById(fc.correctAnswer);
        correctElement.className="correct";
        incorrectSelection(fc.correctAnswer);
    }
    disarmMCButtons();
    armNextTermButton();
}

function dCallBack() {
    let mcDElement = document.getElementById("D");
    if (fc.correctAnswer === "D") {
        mcDElement.className="correct";
        correctSelection(fc.correctAnswer);
    } else {
        mcDElement.className="incorrect";
        let correctElement=document.getElementById(fc.correctAnswer);
        correctElement.className="correct";
        incorrectSelection(fc.correctAnswer);
    }
    disarmMCButtons();
    armNextTermButton();
}

function armMCButtons(fc) {
    let aBtn = document.getElementById("aButton");
    aBtn.addEventListener("click", aCallBack);
    aBtn.className="armed";

    let bBtn = document.getElementById("bButton");
    bBtn.addEventListener("click", bCallBack);
    bBtn.className="armed";

    let cBtn = document.getElementById("cButton");
    cBtn.addEventListener("click", cCallBack);
    cBtn.className="armed";

    let dBtn = document.getElementById("dButton");
    dBtn.addEventListener("click", dCallBack);
    dBtn.className="armed";
    
    return
}

//Let's keep score for fun
let numCorrect = 0;
let total = 0;

//Get initial flash card.
let fc = getFlashCardPageData();
updatePage(fc);

// ARM all multiple choice buttons.
armMCButtons(fc);

