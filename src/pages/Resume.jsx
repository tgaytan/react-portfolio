function Resume() {
    const onButtonClick = () => {
        const resumeUrl = 'TrinidadResume2024.pdf'
        const link = document.createElement('a')
        link.href = resumeUrl
        link.download = 'TRINIDADresume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    return (
        <>
            <div className="page-body">
                <h1 className="text-background title">Resume</h1>
                <div className="text-background text">
                    <h2>Download my <span onClick={onButtonClick}>resume</span></h2>
                </div>
                <div className="text-background text">
                    <h3>Skills</h3>
                    <ul>
                        <li>React</li>
                        <li>NoSQL</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>REST API</li>
                        <li>GraphQL</li>
                        <li>Git</li>
                        <li>Sequelize</li>
                        <li>Application Troubleshooting</li>
                        <li>Active Directory</li>
                        <li>PostgreSQL, MSSQL, Oracle, MySQL</li>
                        <li>Linux</li>
                        <li>SSL</li>
                        <li>Log Analysis</li>
                        <li>Wireshark</li>
                        <li>High Availability</li>
                        <li>Knowledge Capture</li>
                        <li>Amazon S3</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Resume