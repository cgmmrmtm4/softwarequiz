let allFlashCards = [
    {"chapter":1,"term":"Defect/Bug/Fault","definition":"A flow in a component or system that can cause the component or system to fail to perform its required function."},
    {"chapter":1,"term":"Error/Mistake","definition":"A human action that produces an incorrect result."},
    {"chapter":1,"term":"Failure","definition":"Deviation of the component or system from its expected delivery, service or result."},
    {"chapter":1,"term":"Quality","definition":"The degree to which a component, system or process meets specified requirements and/or user/customer needs and expectations."},
    {"chapter":1,"term":"Risk","definition":"A factor that could result in future negative consequences; usually expressed as impact and likelihood."},
    {"chapter":1,"term":"Debugging","definition":"The process of finding, analyzing and removing the causes of failures in software."},
    {"chapter":1,"term":"Requirement", "definition":"A condition or capability needed by a user to solve a problem or achieve an objective that must be met or possessed by a system or system component to satisfy a contract, standard, specification, or other formally imposed document."},
    {"chapter":1,"term":"Review","definition":"A evaluation of a product or project status to ascertain discrepancies from planned results and to recommend improvements. Examples include formal, informal, technical, inspection, and walkthrough."},
    {"chatper":1,"term":"Test Case","definition":"A set of input values, execution preconditions, expected results and execution postconditions, developed for a particular objective or test condition, such as to exercise a particular program path or to verify compliance with a spcific requirement."},
    {"chatper":1,"term":"Testing","definition":"The process consisting of all lifecycle activities, both static and dynamic, concerned with planning, preperation and evalutation of software products and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects."},
    {"chapter":1,"term":"Test Objective", "definition":"A reason or purpose for designing and executing a test"},
    {"chatper":1,"term":"Exhaustive Testing","definition":"A test approach in which the test suite comprises all combinations of input values and preconditions."},
    {"chapter":1,"term":"Confirmation Testing/Re-testing","definition":"Testing that runs test cases that failed the last time they were run, in order to verify the success of corrective actions."},
    {"chapter":1,"term":"Exit Criteria","definition":"The set of generic and specific conditions, agreed upon with the stakeholders for permitting a process to be officially completed. The purpose is to prevent a task from being considered completed when there are still outstanding parts of the task which have not been finished. Used to report against and to plan when to stop testing."},
    {"chapter":1,"term":"Incident","definition":"Any event occurring that requires investigation."},
    {"chapter":1,"term":"Regressiong Testing","definition":"Testing of a previously tested program following modification to ensure that defects have not been introduced or uncovered in unchanged areas of the software, as a result of the change made. It is performed when the software or its environment is changed."},
    {"chapter":1,"term":"Test Basis","definition":"All documents from which the requirements or a component or system can be inferred. The documentation on which the test cases are based."},
    {"chapter":1,"term":"Test Condition","definition":"An item or event of a component or system that could be verified by one or more test cases, e.g. a function, transaction, feature, quality attribute, or structural element."},
    {"chatper":1,"term":"Test Coverage/Coverage","definition":"The degree, expressed as a percentage, to which a specified item has been exercised by a test suite."},
    {"chapter":1,"term":"Test Data","definition":"Data that exists (for example, in a database) before a test is executed, and that affects or is affected by the component or system under test."},
    {"chapter":1,"term":"Test Execution","definition":"The process of running a test on the component or system under test, producing actual results."},
    {"chapter":1,"term":"Test Log","definition":"A chronological record of relevent details about the execution of tests."},
    {"chatper":1,"term":"Test Plan","definition":"A document describing the scope, approach, resources and schedule of intended test activities. It identifies amongst others test items, the features to be tested, the testing tasks, who whill do each task, degress of tester independence, the test environenment, the test design techniques and entry and exit criteria to be used, and the ratinale for their choice, and any risk requiring contingeny planning."},
    {"chapter":1,"term":"Test Procedure/Test Procedure Specification","definition":"A document specifying a sequence of actions for the execution of a test. Also known as test script or manual test script."},
    {"chapter":1,"term":"Test Policy","definition":"A high level document describing the principles, approach and major objectives of the organization regarding testing."},
    {"chapter":1,"term":"Test Suite","definition":"A set of several test cases for a component or system under test, where the post condition of one test is often used as the precondition for the next one."},
    {"chapter":1,"term":"Test Summary Report","definition":"A document summarizing testing activities and results. It also contains an evaluation of the corresponding test items against exit criteria."},
    {"chapter":1,"term":"Testware","definition":"Artifacts produced during the test process required to plan, design, and execute tests, such as documentation, scripts, inputs, expected results, set-up and clean-up procedures, files, databases, environment, and any additional software or utilities used in testing."},
    {"chapter":1,"term":"Error Guessing","definition":"A test design technique where the experience of the tester is used to anticipate what defects might be present in the component or system under test as a result of errors made, and to design tests specifically to expose them."},
    {"chapter":1,"term":"Independence of Testing","definition":"Seperation of responsibilities, which encourages the accomplishment of objectve testing."},
    {"chapter":2,"term":"Commercial Off-The_Shelf (COTS)/Off-The_Shelf Software","definition":"A software product that is developed for the general market, i.e. for a large number of customers, and that is delivered to many customers in indentical format."},
    {"chapter":2,"term":"Iterative Development Model","definition":"A development lifecycle where a project is broken into a usually large number of iterations. An iteration is a complete development loop resulting in a release (internal or external) of an executable product, a subset of the final product under development, which grows from iteration to iteration to become the final product."},
    {"chapter":2,"term":"Incremental Development Model","definition":"A development lifecycle where a project is broken into a series of increments, each of which delivers a portion of the functionality in the overall project requirements. The requriements are prioritized and delivered in priority order in the appropriate increment. In some (but not all) versions of this lifecycle model, each subproject follows a mini V-model with its own design, coding and testing phases."},
    {"chapter":2,"term":"Validation","definition":"Confirmation by examination and through provision of objective eveidence that the requirements for a specific intended use or application have been fulfilled."},
    {"chapter":2,"term":"Verification","definition":"Confirmation by examination and through provision of objective evidence that specific requirements have been fulfilled."},
    {"chapter":2,"term":"V-Model","definition":"A framework to describe the software development lifecycle activities from requirements specification to maintenance. Illustrates how testing activities can be integrated into each phase of the software development lifecycle."},
    {"chapter":2,"term":"Alpha Testing","definition":"Simulated or actual operational testing by potential user/customers or an independent test team at the developers' site, but outside the development organization."},
    {"chapter":2,"term":"Beta Testing/Field Testing","definition":"Operational testing by potential and/or existing users/customers at an external site not otherwise involved with the developers, to determine whether or not a component or system satisfies the user/customer needs and fits within the business processes. Often employed as a form of external acceptance testing for off-the-shelf software in order to acquire feedback from the market."},
    {"chapter":2,"term":"Component Testing","definition":"The testing of individual software compontents."},
    {"chapter":2,"term":"Driver","definition":"A software component or test tool that replaces a component that takes care of the control and/or the calling of a component or system."},
    {"chapter":2,"term":"Functional Requirement","definition":"A requirement that specifies a function that a component or system must perform."},
    {"chapter":2,"term":"Integration","definition":"The process of combining components or systems into larget assemblies."},
    {"chapter":2,"term":"Integration Testing","definition":"Testing performed to expos defects in the interface and in the interactions between integrated components or systems."},
    {"chapter":2,"term":"Non-Functional Requirement","definition":"A requirement that does not relate to functionality, but to attributes such as reliability, efficiency, usability, maintainability and portability."},
    {"chapter":2,"term":"Robustness Testing","definition":"Testing to determine the robustness of the software product."},
    {"chapter":2,"term":"Stub","definition":"A skeletal or special-purpose implementation of a software component, used to develop or test a component that calls or is otherwise dependent on it. It replaces a called component."},
    {"chapter":2,"term":"System Testing","definition":"The process of testing an integrated system to verify that it meets specified requirements."},
    {"chapter":2,"term":"Test Environment","definition":"An environment containing hardware, instrumentation, simulators, software tools, and other support elements to conduct a test."},
    {"chapter":2,"term":"Test Level","definition":"group of test activities that are organized and managed together. A test level is linked to the responsibilies in a project. Examples are component test, integration test, system test and acceptance test."},
    {"chapter":2,"term":"Test-Driven Development","definition":"A way of developing software where the test cases are developed, and often automated, before the software is developed to run those test cases."},
    {"chapter":2,"term":"User Acceptance Testing/Acceptance Testing/Acceptance","definition":"Formal testing with respect to user needs, requirements, and business processes conducted to determine whether or not a system satisfies the acceptance criteria and to enable the user, customers or other authorized entity to determine whether or not to accept the system."},
    {"chapter":2,"term":"Black-Box Testing","definition":"Testing, either functional or non-functional, without reference to the internal structure of the component or system."},
    {"chapter":2,"term":"Code Coverage","definition":"An analysis method that determines which parts of the software have been executed by the test suite and which parts have not been executed, e.g., statment coverage, decision coverage, or condition coverage."},
    {"chapter":2,"term":"Functional Testing","definition":"Testing based on an analysis of the specification of the functionality of a component or system."},
    {"chapter":2,"term":"Interoperability Testing","definition":"The process of testing to detrmine that interoperability of a software product."},
    {"chapter":2,"term":"Load Testing","definition":"A type of performance testing conducted to evaluate the behavior of a component or system with increasing load, e.g. numbers of parallel users and/or numbers of transactions, to determine what load can be handled by the component or system."},
    {"chapter":2,"term":"Maintainability Testing","definition":"The process of testing to determine the maintainability of a software product."},
    {"chapter":2,"term":"Performance Testing","definition":"The process of testing to determine the performance of a software product."},
    {"chapter":2,"term":"Portability Testing","definition":"The process of testing to determine the portability of a software product."},
    {"chapter":2,"term":"Reliability Testing","definition":"The process of testing to determine the reliability of a software product."},
    {"chapter":2,"term":"Security Testing","definition":"Testing to determine the security of the software product."},
    {"chapter":2,"term":"Stress Testing","definition":"A type of performance testing conducted to evaluate a system or component at or beyond the limits of its anticipated or specified workloads, or with reduced availability of resources such as access to memory or servers."},
    {"chapter":2,"term":"Usability Testing","definition":"Testing to determine the extent to which the software product is understood, easy to learn, easy to operate and attractive to the users under specified conditions."},
    {"chapter":2,"term":"White-Box Testing/Structural Testing","definition":"Testing based on the analysis of the internal structure of the component or system."},
    {"chapter":2,"term":"Impact Analysis","definition":"The assessment of change to the layers of development documentation, test documentation and components, in order to implement a given change to a specified requriement."},
    {"chapter":2,"term":"Maintenance Testing","definition":"Tesing the changes to an operational system or the impact of a changed environment to an operational system."}
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
    let mcBElement=document.getElementById("B");
    mcBElement.innerHTML=fc.mc[1];
    let mcCElement=document.getElementById("C");
    mcCElement.innerHTML=fc.mc[2];
    let mcDElement=document.getElementById("D");
    mcDElement.innerHTML=fc.mc[3];
}

//Get initial flash card.
let fc = getFlashCardPageData();
updatePage(fc);

// ARM all multiple choice buttons.
let aBtn = document.getElementById("aButton");
aBtn.addEventListener("click", function() {
    if (fc.correctAnswer === "A") {
        correctSelection(fc.correctAnswer);
    } else {
        incorrectSelection(fc.correctAnswer);
    }
});

let bBtn = document.getElementById("bButton");
bBtn.addEventListener("click", function() {
    if (fc.correctAnswer === "B") {
        correctSelection(fc.correctAnswer);
    } else {
        incorrectSelection(fc.correctAnswer);
    }
});

let cBtn = document.getElementById("cButton");
cBtn.addEventListener("click", function() {
    if (fc.correctAnswer === "C") {
        correctSelection(fc.correctAnswer);
    } else {
        incorrectSelection(fc.correctAnswer);
    }
});

let dBtn = document.getElementById("dButton");
dBtn.addEventListener("click", function() {
    if (fc.correctAnswer === "D") {
        correctSelection(fc.correctAnswer);
    } else {
        incorrectSelection(fc.correctAnswer);
    }
});

// Arm the get next flashcard button.
let anotherBtn = document.getElementById("another");
anotherBtn.addEventListener("click", function() {
    clearSelection();
    fc=getFlashCardPageData();
    updatePage(fc);
})
