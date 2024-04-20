import React from 'react';
import TeamMember from './TeamMember';
import teamMembers from '../../data/teamMembers';

function Team() {
    return (
        <div className="team">
            {teamMembers.map(member => (
                <TeamMember key={member.name} member={member} />
            ))}
        </div>
    );
}

export default Team;
